<?php

namespace Database\Seeders;

use App\Models\ProductAttribute;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductAttributeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        foreach ( range(1,10) as $index) {
            
            ProductAttribute::create([
                'name'=> $faker->word(),
                'type'=> $faker->word(),
                'slug'=> $faker->word()
            ]);
        }
    }
}
