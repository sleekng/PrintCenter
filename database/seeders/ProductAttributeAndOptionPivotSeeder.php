<?php

namespace Database\Seeders;

use App\Models\ProductAttribute;
use App\Models\ProductAttributeOption;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductAttributeAndOptionPivotSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        $productAttributes = ProductAttribute::all();
        $productOptions = ProductAttributeOption::all();

        $productAttributes->each(function ($productAttribute) use ($productOptions) {
            $productAttribute->options()->attach(
                $productOptions->random(rand(1, 5))->pluck('id')->toArray()
            );
        });
    }
}
