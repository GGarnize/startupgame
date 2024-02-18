<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::middleware('auth')->group(function () {
    Route::apiResource('company', \App\Http\Controllers\CompanyController::class)->names('company');
    Route::get('/generateEmployee', [\App\Http\Controllers\EmployeeController::class, 'generateRandom'])->name('generate.Employee');
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
