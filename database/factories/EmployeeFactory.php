<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
    protected $model = \App\Models\Employee::class;

    /**
     * Define the model's default state.
     *
     * ['name', 'profession', 'salary', 'happiness', 'efficiency', 'company_id']
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'profession' => $this->faker->randomElement(['Developer', 'Designer', 'Manager']),
            'salary' => $this->faker->numberBetween(8000, 10000),
            'happiness' => $this->faker->numberBetween(85, 100),
            'efficiency' => $this->faker->numberBetween(85, 100)
        ];
    }
}
