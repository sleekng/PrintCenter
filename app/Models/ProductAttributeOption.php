<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttributeOption extends Model
{
    use HasFactory;

    protected $guarded = [];
    
    public function attributes()
    {
        return $this->belongsToMany(ProductAttribute::class);
    }

        // Define the relationship with OrderItem through the pivot table
        public function orderItems()
        {
            return $this->hasManyThrough(OrderItem::class, OrderItemAttribute::class, 'option_id', 'id', 'id', 'order_item_id');
        }


           // Define any necessary relationships
    public function orderItemAttributes()
    {
        return $this->hasMany(OrderItemAttribute::class, 'option_id');
    }
}
