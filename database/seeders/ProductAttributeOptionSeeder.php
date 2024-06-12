<?php

namespace Database\Seeders;

use App\Models\ProductAttributeOption;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductAttributeOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $faker = Faker::create();

        foreach (range(1,20) as $index) {
            
            ProductAttributeOption::create([
                'value'=> $faker->word(),
                'value'=> $faker->randomFloat(2,5,300)
            ]);
        }
    }
}
