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
        Schema::create('product_product_attribute', function (Blueprint $table) {
            
            $table->unsignedBigInteger('product_id');
            $table->unsignedBigInteger('product_attribute_id');

            $table->foreign('product_id')->references('id')
                ->on('products')->onDelete('cascade');

            $table->foreign( 'product_attribute_id' )->references('id')
                ->on('product_attributes')->onDelete('cascade');
                
            // Avoid unique constraint on product attribute id to allow same attribute for multiple products
            // but with different values, like color red and color blue for the same t-shirt.
            $table->primary(['product_id', 'product_attribute_id']);
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_product_attribute');
    }
};
