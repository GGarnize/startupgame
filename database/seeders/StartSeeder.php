<?php

namespace Database\Seeders;

use App\Models\Company;
use App\Models\Project;
use App\Models\Skill;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class StartSeeder extends Seeder
{
    public function run(): void
    {
        $user = User::first();

        if ($user) {
            $company = Company::firstOrCreate([
                'user_id' => $user->id,
                'name' => 'Coders Dojo'
            ],[
                'start_date' => date('Y-m-d')
            ]);

            $project = Project::firstOrCreate([
                'company_id' => $company->id,
                'name' => 'Coders Dojo Project',
                'description' => 'Coders Dojo Project Description',
                'budget' => 1000,
                'status' => 'started'
            ], [
                'deadline' => Carbon::now()->addDays(30)
            ]);

            Task::firstOrCreate([
                'project_id' => $project->id,
                'name' => 'Coders Dojo Task',
                'description' => 'Coders Dojo Task Description',
                'progress' => 0,
                'priority' => 0,
                'type' => 'development',
                'status' => 'started'
            ], [
                'deadline' => Carbon::now()->addDays(30),
                'start_task' => Carbon::now()
            ]);

            Task::firstOrCreate([
                'project_id' => $project->id,
                'name' => 'Coders Dojo Task 2',
                'description' => 'Coders Dojo Task 2 Description',
                'progress' => 0,
                'priority' => 1,
                'type' => 'development',
                'status' => 'started'
            ], [
                'deadline' => Carbon::now()->addDays(23),
                'start_task' => Carbon::now()
            ]);
        }
        $skills = [
            [
                'name' => 'Faster Coding',
                'description' => 'Faster Coding Description',
                'type' => 'development',
                'effect' => 'task',
            ],
            [
                'name' => 'More Rewards',
                'description' => 'More Rewards Description',
                'type' => 'marketing',
                'effect' => 'project',
            ],
            [
                'name' => 'Cheap Employee',
                'description' => 'Cheap Employee Description',
                'type' => 'all',
                'effect' => 'employee',
            ],
            [
                'name' => 'Faster UI/UX',
                'description' => 'Faster UI/UX Description',
                'type' => 'design',
                'effect' => 'task',
            ]
        ];
        foreach ($skills as $skill) {
            Skill::firstOrCreate($skill);
        }

    }
}
