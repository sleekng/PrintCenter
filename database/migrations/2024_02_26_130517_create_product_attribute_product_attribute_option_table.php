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
        Schema::create('product_attribute_product_attribute_option', function (Blueprint $table) {
            $table->foreignId('product_attribute_id')
            ->constrained()
            ->onDelete('cascade')
            ->index('product_attr_id_fk'); // shorter constraint name
            
      $table->foreignId('product_attribute_option_id')
            ->constrained()
            ->onDelete('cascade')
            ->index('prod_attr_opt_id_fk'); // shorter constraint name
            
      $table->primary(['product_attribute_id', 'product_attribute_option_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_attribute_product_attribute_option');
    }
};
