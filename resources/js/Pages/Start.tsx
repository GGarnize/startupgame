import {Head, Link, useForm, usePage} from '@inertiajs/react';
import {FormEventHandler} from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';

export default function Start({companies}: Companies) {
    const {auth} = usePage().props as any;
    const {data, setData, post, processing, errors, reset} = useForm({
        user_id: auth?.user ? auth.user.id : 0, name: '', start_date: (new Date).toISOString().split('T')[0],
    });
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('company.store'));
    };
    return (
        <>
            <Head title="Start"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-red-50 text-gray-900">You're logged in!</div>
                        {companies.map((company) => (
                            <div key={company.id}>{company.name}</div>
                        ))}
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
            </div>
        </>
    )
        ;
}
