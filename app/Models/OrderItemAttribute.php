<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItemAttribute extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_item_id',
        'product_attribute_id',
        'option_id',
    ];

    public function orderItem()
    {
        return $this->belongsTo(OrderItem::class);
    }

    // Relationship with ProductAttribute
    public function attribute()
    {
        return $this->belongsTo(ProductAttribute::class, 'attribute_id');
    }

    // Relationship with ProductAttributeOption
    public function option()
    {
        return $this->belongsTo(ProductAttributeOption::class, 'option_id');
    }

    
        public function productAttribute()
        {
            return $this->belongsTo(ProductAttribute::class);
        }
    
        public function productAttributeOption()
        {
            return $this->belongsTo(ProductAttributeOption::class, 'option_id');
        }
}
