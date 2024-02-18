//criar componente dialogo de cadastro de funcionario
import React, {useEffect, useRef, useState} from 'react';
import Modal from '@/Components/Modal';
import {EmployeeService} from '@/services/EmployeeService';

interface ModalProps {
    isOpen: boolean;
    onSubmit: (data: any) => void;
    onClose: () => void;
}

const EmployeeComponent: React.FC<ModalProps> = ({
                                                     onSubmit,
                                                     isOpen,
                                                     onClose,
                                                 }) => {

    const focusInputRef = useRef<HTMLInputElement | null>(null);
    const [formState, setFormState] = useState<any>(
        {}
    );

    const [employee, setEmployee] = useState<any[]>([]);

    useEffect(() => {
        if (isOpen && focusInputRef.current) {
            EmployeeService.getEmployees().then((response: any) => {
                setEmployee(response.data);
            });
            setTimeout(() => {
                focusInputRef.current!.focus();
            }, 0);
        }
    }, [isOpen]);

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ): void => {
        const {name, value} = event.target;
        setFormState((prevFormData: any) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault();
        onSubmit(formState);
        setFormState({});
    };

    return (
        <Modal
            show={isOpen}
            onClose={onClose}
        >
            <div className="dialog-header">
                <h2>Employee</h2>
            </div>
            <div className="dialog-body">
                {employee && employee.map((employee: any, index: number) => (
                    <p key={index}>{employee.name}</p>
                ))}
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input
                            ref={focusInputRef}
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
export default EmployeeComponent;
