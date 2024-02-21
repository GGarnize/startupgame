<?php

namespace Database\Seeders;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Company;
use App\Models\Project;
use App\Models\Task;
use Illuminate\Database\Seeder;

class StartSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();

        if ($user) {
            $company = Company::create([
                'user_id' => $user->id,
                'name' => 'Coders Dojo',
                'start_date' => date('Y-m-d')
            ]);

            $project = Project::create([
                'company_id' => $company->id,
                'name' => 'Coders Dojo Project',
                'description' => 'Coders Dojo Project Description',
                'budget' => 1000,
                'deadline' => Carbon::now()->addDays(30),
                'status' => 'started'
            ]);

            Task::create([
                'project_id' => $project->id,
                'name' => 'Coders Dojo Task',
                'description' => 'Coders Dojo Task Description',
                'deadline' => Carbon::now()->addDays(30),
                'start_task' => Carbon::now(),
                'progress' => 0,
                'priority' => 0,
                'type' => 'development',
                'status' => 'started'
            ]);

            Task::create([
                'project_id' => $project->id,
                'name' => 'Coders Dojo Task 2',
                'description' => 'Coders Dojo Task 2 Description',
                'deadline' => Carbon::now()->addDays(23),
                'start_task' => Carbon::now(),
                'progress' => 0,
                'priority' => 1,
                'type' => 'development',
                'status' => 'started'
            ]);
        }
    }
}
