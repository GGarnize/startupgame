<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function start()
    {
        $companies = Company::all();
        return Inertia::render('Start', ['companies' => $companies]);
    }

    public function startGame(Company $company)
    {
        $company->load(['employees', 'projects.tasks', 'finances']);
        return Inertia::render('Game/StartGame', [
            'company' => $company
        ]);
    }

}
