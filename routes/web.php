<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GeneralController;
use App\Http\Controllers\OrderItemController;
use App\Http\Controllers\OrderStatusController;
use App\Http\Controllers\ProductAttributeController;
use App\Http\Controllers\ProductAttributeOptionController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuotesRequestController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeOption;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Artisan;


Route::get('/create-storage-link', function () {
    try {
        Artisan::call('storage:link');
        return 'The symbolic link has been created.';
    } catch (\Exception $e) {
        return 'Error: ' . $e->getMessage();
    }
});

Route::put('/orders/{item}', [OrderItemController::class, 'updateStatus']);

Route::get('/', function () {
   
 /*    $featured = Category::with('products')->findOrFail(1); */

    $FeaturedProducts = Product::where('featured', 'Yes')->orderBy('created_at', 'desc')->get();
    $products = Product::all();
 
    $categories = Category::with('products')->get();

    
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,

        'FeaturedProducts'=>$FeaturedProducts,
        'products'=>$products,
        'categories'=>$categories
    ]);
})->name('home');

Route::get('all-products', function () {
    
    $categories = Category::with('products')->get();
    
    return Inertia::render('AllProducts', [
        'categories'=>$categories
    ]); 
})->name('all-products');

Route::resource('/quotes', QuotesRequestController::class);



Route::resource('/order-tracking', OrderStatusController::class);


Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact-us');

Route::post('/contact', [ContactController::class, 'store']);

/* Route::get('/order-tracking', function () {
    return Inertia::render('OrderTracking', [
        'order' => [
            'id' => 'Y34XDHR',
            'expectedArrival' => '01/12/19',
            'trackingNumber' => '234094567242423422898',
            'status' => 'en_route'
        ]
    ]);
})->name('order-tracking'); */



/* Route::resource('product-details',[ProductController::class]); */
/* Route::get('product-details', function(){
    return Inertia::render('Product/Show');
    
})->name('product.details'); */




Route::resource('product', ProductController::class);
Route::resource('category', CategoryController::class);
Route::resource('attributes', ProductAttributeController::class);
Route::resource('options', ProductAttributeOptionController::class);
Route::put('/product-update/{product}', [ProductController::class, 'updateProduct'])->name('product-update-product');


Route::post('/image-upload', [ProductController::class, 'imageUpload'])->name('products.image-upload');

Route::get('/upload-artwork', function(){
    return Inertia::render('Product/uploadArtwork');
    
})->name('product.uploadArtwork');




Route::prefix('cart')->group(function () {
    Route::post('/add', [CartController::class, 'add']);
    Route::get('/cart', [CartController::class, 'index'])->name('cart');
    Route::put('/update/{cartItemId}', [CartController::class, 'update']);
    Route::put('/update-cart/{productId}', [CartController::class, 'updateCart']);
    Route::post('/clear', [CartController::class, 'clear']);
});

Route::post('/cart/remove/{cartItemId}', [CartController::class, 'remove'])->name('cart.remove');



Route::resource('cart', CartController::class);
Route::post('/checkout',  [GeneralController::class, 'checkout'])->name('checkout');
Route::get('/checkout',  [GeneralController::class, 'proceedToCheckout'])->name('checkout-proceed');
Route::get('/paynow/{url}',  [GeneralController::class, 'paynow'])->name('paynow');
Route::get('/payment-success/{id}',  [GeneralController::class, 'paymentSuccess'])->name('payment-success');

/* 
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard'); */



Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::middleware(['admin'])->group(function(){
    Route::get('admin-control',function() {
        return Inertia::render('AdminControl');
     });
     


    Route::get('/product-create', [ProductController::class, 'create'])->name('product.create');
    Route::get('/product-attribute-options/create', [ProductAttributeOptionController::class, 'create'])->name('product-attribute-options.create');
    Route::post('/product-attribute-options/store', [ProductAttributeOptionController::class, 'store'])->name('product-attribute-options.store');
    
    
    Route::get('/product-attributes/create', [ProductAttributeController::class, 'create'])->name('product-attributes.create');
    Route::delete('/product-attributes/{id}', [ProductAttributeController::class, 'destroy'])->name('product-attributes.destroy');
    Route::post('/product-attributes', [ProductAttributeController::class, 'store'])->name('product-attributes.store');
    Route::post('/products-store', [ProductController::class, 'store'])->name('product.store');
    
    Route::get('/product-attribute-options', [ProductAttributeOptionController::class, 'index'])->name('product-attribute-options.index');
    
    
    Route::get('/category-create', [CategoryController::class, 'create'])->name('category.create');
    Route::post('/category-store', [CategoryController::class, 'store'])->name('category.store');
    
    Route::get('/role-create', [
        RoleController::class, 
        'create'
    ])->name('role.create');
    
    Route::post('/role-store', [
        RoleController::class, 
        'store'
    ])->name('role.store');
    
    
    Route::resource('/users', UserController::class);

});








require __DIR__.'/auth.php';
