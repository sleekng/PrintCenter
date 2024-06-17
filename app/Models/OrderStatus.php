<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{



    use HasFactory;

    protected $fillable=[
        'order_id',
        'order_item_id',
        'tracking_number',
        'status',
        'expected_arrival_date'

    ];

    public function orders()
    {
        return $this->belongsTo(Order::class);
    }

    public function orderItems()
    {
        return $this->belongsTo(OrderItem::class);
    }
}
