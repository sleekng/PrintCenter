<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'slug',
        'for_product',
    ];

    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function options()
    {
        return $this->belongsToMany(ProductAttributeOption::class);
    }


    public function orderItems()
    {
        return $this->belongsToMany(OrderItem::class, 'order_item_attributes', 'product_attribute_id', 'order_item_id')
                    ->withPivot('option_id')
                    ->withTimestamps();
    }

    
}
