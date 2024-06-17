<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $fillable = [
        'quantityType',
        'name',
        'unit',
        'slug',
        'description',
        'price',
        'featured',

    ];


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function attributes()
    {
        return $this->hasMany(ProductAttribute::class);
    }
}
