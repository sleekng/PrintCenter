<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuotesRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'phone_number',
        'user_id',
        'address',
        'quote',
        'artwork',
        'email',
    ];
}
 