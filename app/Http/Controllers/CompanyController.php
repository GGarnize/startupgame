<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function index()
    {
        return Company::all();
    }

    public function show(Company $company)
    {
        return $company;
    }

    public function store(Request $request)
    {
        return Company::create($request->all());
    }

    public function update(Request $request, Company $company)
    {
        $company->update($request->all());
        return $company;
    }

    public function delete(Company $company)
    {
        $company->delete();
        return $company;
    }
}
