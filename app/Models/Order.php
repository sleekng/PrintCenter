<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;



    protected $fillable = [
        'user_id',
        'total_amount',
        'shippingType',
        'DeliveryLocation',
        'DeliveryState',
        'DeliveryState',
        'status',
        'email',
        'DeliveryAddress',
        'reference_number',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function delivery(){
        return $this->hasOne(Delivery::class);
    }


}
