<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('unit');
            $table->string('slug');
            $table->string('featured');
            $table->text('description')->nullable();
            $table->text('product_img1')->nullable();
            $table->text('product_img2')->nullable();
            $table->text('product_img3')->nullable();
            $table->text('quantityType')->nullable();
            $table->decimal('price', 10, 2); // Example: Up to 10 digits with 2 decimal places
            $table->timestamps();
        });
    }

    /** 
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
