<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use Faker\Factory as Faker;

class CategoryProductPivotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $categories = Category::all();
        $products = Product::all();

        $categories->each(function ($category) use ($products) {
            $category->products()->attach(
                $products->random(rand(1, 5))->pluck('id')->toArray()
            );
        });

    }
}
