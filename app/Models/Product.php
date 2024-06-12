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
        'description',
        'price',

    ];


    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function attributes()
{
    return $this->belongsToMany(ProductAttribute::class);
}

}
