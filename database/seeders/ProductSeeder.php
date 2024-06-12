<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $faker = Faker::create();

        foreach (range(1,500) as $index) {

            Product::create([
                    'name' => $faker->sentence($nbWords = 6, $variableNbWords = true),
                    'description'=>$faker->paragraph(),
                    'unit'=>$faker->numberBetween($min = 1, $max = 1000),
                    'product_img1'=>$faker->imageUrl(640, 480, 'animals', true),
                    'product_img2'=>$faker->imageUrl(360, 360, 'animals', true, 'dogs', true, 'jpg'),
                    'product_img3'=>$faker->imageUrl(360, 360, 'animals', true, 'dogs', true),
                    'price'=>$faker->randomFloat(2,5,300),
                ]);
        
            
        }


    }
}
