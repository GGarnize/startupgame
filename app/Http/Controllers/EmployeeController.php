<?php

namespace App\Http\Controllers;

use App\Models\Employee;

class EmployeeController extends Controller
{
    public function generateRandom(int $number = 5)
    {
        return response()->json(Employee::factory()->count($number)->make());
    }
}
