//criar classe startGame:

import {Head} from '@inertiajs/react';

interface StartParamsType {
    company: Company
}
export default function StartGame({
    company
                                  }: StartParamsType) {
    console.log('company', company)

    return (
        <>
        <Head title="Jogando"/>
            <div className="py-12">
                <h1>Start Game</h1>
            </div>
        </>
    )
}
