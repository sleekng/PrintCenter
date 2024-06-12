<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductAttribute;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductAndProductAttributePivotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
        $faker = Faker::create();

        $products = Product::all();
        $productAttributes = ProductAttribute::all();

        
        $products->each(function ($product) use ($productAttributes) {
            $product->attributes()->attach(
                $productAttributes->random(rand(1, 5))->pluck('id')->toArray()
            );
        });

        // create product attribute pivot table data
    }
}
