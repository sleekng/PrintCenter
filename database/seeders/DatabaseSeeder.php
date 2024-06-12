<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);



        $this->call(UsersTableSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(RoleUserPivotSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(CategoryProductPivotSeeder::class);
        $this->call(ProductAttributeSeeder::class);
        $this->call(ProductAttributeOptionSeeder::class);
        $this->call(ProductAttributeAndOptionPivotSeeder::class);
        $this->call(ProductAndProductAttributePivotSeeder::class);

    }
}
