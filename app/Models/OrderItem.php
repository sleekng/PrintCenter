<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'hireDesigner',
        'deliveryPeriod',
        'designDescription',
        'expectedDeliveryDate',
        'quantity',
        'price',

    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function attributes()
    {
        return $this->belongsToMany(ProductAttribute::class, 'order_item_attributes', 'order_item_id', 'product_attribute_id')
                    ->withPivot('option_id')
                    ->withTimestamps();
    }
    public function orderimages()
    {
        return $this->hasMany(OrderImage::class);
    }

    public function options()
    {
        return $this->hasManyThrough(ProductAttributeOption::class, OrderItemAttribute::class, 'order_item_id', 'id', 'id', 'option_id');
    }
}
