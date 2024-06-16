<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttributeOption extends Model
{
    use HasFactory;
    
    protected $fillable = ['product_attribute_id', 'value', 'cost'];

        // Define the relationship with OrderItem through the pivot table
        public function orderItems()
        {
            return $this->hasManyThrough(OrderItem::class, OrderItemAttribute::class, 'option_id', 'id', 'id', 'order_item_id');
        }

        public function attribute()
        {
            return $this->belongsTo(ProductAttribute::class);
        }

           // Define any necessary relationships
    public function orderItemAttributes()
    {
        return $this->hasMany(OrderItemAttribute::class, 'option_id');
    }
}
