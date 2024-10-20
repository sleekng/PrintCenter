<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\Product;

class ProductAndCategorySeeder extends Seeder {
    public function run() {


     // Create products under the "Ink & Stamp" category with a 20-word description
     $products = [
        [
            'name' => 'Bag',
            'slug' => 'bag',
            'description' => 'Stylish promotional bags that carry your brand message while providing utility, perfect for events, trade shows, or everyday use.',
            'price' => 4.00
        ],
    ];
        foreach ($products as $productData) {
            $product = Product::create(array_merge($productData, [
                'quantityType' => 'type-5',
                'unit' => 100,
                'featured' => false,
                'goto_premium' => null,
            ]));

        }
    }
}
