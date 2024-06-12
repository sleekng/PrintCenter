<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $faker = Faker::create();
        $roles = ['customer', 'admin'];

        $role = $faker->randomElement($roles);
        
        foreach (range(1, 2) as $index) {
            Role::insert([
                'role' => $role
            ]);
        }
    }
}
