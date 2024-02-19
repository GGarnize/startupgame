import {Head, useForm, usePage} from '@inertiajs/react';
import {FormEventHandler, useState} from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import EmployeeComponent from '@/Components/Dialogs/EmployeeComponent';
import {useDispatch, useSelector} from 'react-redux';
import {resetSlice, setCompany} from '@/slices/companySlice'

export default function Start({companies}: Companies) {
    const {auth} = usePage().props as any;
    const {data, setData, post, processing, errors, reset} = useForm({
        user_id: auth?.user ? auth.user.id : 0, name: '', start_date: (new Date).toISOString().split('T')[0],
    });
    const dispatch = useDispatch()
    const company = useSelector((state: any) => state.company.company)
    const [employeeDialogShow, setEmployeeDialogShow] = useState(false);

    const openDialog = () => {
        setEmployeeDialogShow(true);
    }

    const handleSelectCompany = (company: Company) => {
        resetSlice()
        dispatch(setCompany(company))
    }

    const showTest = () => {
        console.log(company)
    }

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('company.store'));
    };
    return (
        <>
            <Head title="Start"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div>
                        <button onClick={openDialog}>Modal</button>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        {companies.map((company: Company, index: number) => (
                            <div key={index}>
                                <button onClick={() => handleSelectCompany(company)}>
                                    {company.name}
                                </button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <button onClick={showTest}>Teste</button>
                    </div>

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nome da empresa"/>
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Cadastrar
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                <EmployeeComponent
                    isOpen={employeeDialogShow}
                    onClose={() => setEmployeeDialogShow(false)}
                    onSubmit={(data) => console.log(data)}
                />
            </div>
        </>
    )
        ;
}
