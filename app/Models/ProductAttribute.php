<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'name', 'type'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }



    public function options()
    {
        return $this->hasMany(ProductAttributeOption::class);
    }

    public function orderItems()
    {
        return $this->belongsToMany(OrderItem::class, 'order_item_attributes', 'product_attribute_id', 'order_item_id')
                    ->withPivot('option_id')
                    ->withTimestamps();
    }

    
}
