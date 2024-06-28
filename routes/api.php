<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\ProductAttributeOptionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Models\ProductAttributeOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/design-artwork', [CartController::class, 'artwork'])->name('design');

Route::post('/delete-file', [CartController::class, 'deleteFile'])->name('delete-file');
Route::post('/update-sub-total', [GeneralController::class, 'subtotal'])->name('update-sub-total');


Route::post('/product-attribute-options/store-api', function(Request $request){
 
    if($request->value == null || $request->cost == null ){
        return response()->json([
            'error' => true,  
            'data'=>'Please enter Option'
         ],200); 
    }

   ProductAttributeOption::create([
    'value'=>$request->value,
    'cost'=>$request->cost
   ]);


    return response()->json([
        'success' => true,  
        'data'=>'Added Successfully'
     ],200);
 
})->name('product-attribute-options.store-api');


Route::get('all-get-product', [GeneralController::class,'products'])->name('all-get-product');


Route::put('user-update/{id}', [UserController::class,'update'])->name('user.update');
Route::post('user-store', [UserController::class,'store'])->name('user.store');
Route::get('load-users', [UserController::class,'loadUser'])->name('load-users');
Route::delete('user-delete/{id}', [UserController::class,'destroy'])->name('user-delete');

Route::get('/product-attribute-options/load-option', function(){

    $options = ProductAttributeOption::all();
    if($options){
        return response()->json([
            'status' => true,  
            'data'=>$options 
         ],200);
     }else{
        return response()->json(["status"=>false,"message"=>"No data found!"],404);
     }

})->name('product-attribute-options.load-option');

