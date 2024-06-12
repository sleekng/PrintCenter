<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAttribute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Validation\Rules\File;

class ProductController extends Controller
{



    public function __construct()
    {
        $this->middleware('admin')->except('show');
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Product/Index', [
            'products' =>  $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $attributes = ProductAttribute::all();
        $categories = Category::all();


        return Inertia::render('Product/Create', [
            'attributes' => $attributes,
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'unit' => 'required|string|max:255',
            'description' => 'required|string',
            'quantityType' => 'required|string',
            'price' => 'required|string|max:255',
            // Add validation for other product attributes as needed
        ]);

        $Data = $request->validate([
            'attributes' => 'array',
            'categories' => 'array',
            // Add validation for other product attributes as needed
        ]);

        $product = Product::create([
            'name' => $validatedData['name'],
            'unit' => $validatedData['unit'],
            'description' => $validatedData['description'],
            'price' => $validatedData['price'],
            'quantityType' => $validatedData['quantityType'],
        ]);

        $files = request()->file('files');


        if (count($files)  > 0) {
            for ($i = 0; $i < count($files); $i++) {
                $name = $files[$i]->hashName(); // Generate a unique, random name...
                /* $extension = $files[$i]->extension(); // Determine the file's extension based on the file's MIME type... */

                $files[$i]->storeAs(
                    'public/' . str_replace(' ', '', $request->name),
                    $name
                );

                if ($i == 0) {
                    $product->product_img1 = str_replace(' ', '', $request->name) . '/' . $name;
                    $product->save();
                }
                if ($i == 1) {
                    $product->product_img2 = str_replace(' ', '', $request->name) . '/' . $name;
                    $product->save();
                }
                if ($i == 2) {
                    $product->product_img3 = str_replace(' ', '', $request->name) . '/' . $name;
                    $product->save();
                }
            }
        }

        if (isset($Data['attributes'])) {

            // Attach product attributes and their options
            $product->attributes()->attach($Data['attributes']);
        }

        if (isset($Data['categories'])) {

            $product->categories()->attach($Data['categories']);
        }


        return redirect()->route('product.index')->with('success', 'Product Added successfully.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {

        $productPack = $product->load('attributes.options');
        $categories = Category::with('products')->get();

        
        return Inertia::render('Product/Show', [
            'product' => $productPack,
            'navOptions' => $categories
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $productContainer = $product->load('attributes.options', 'categories');
        $attributes = ProductAttribute::all(); // Retrieve all attributes to select from
        $categories = Category::all(); // Retrieve all attributes to select from
        return Inertia::render('Product/Edit', [
            'product' => $productContainer,
            'attributes' => $attributes,
            'categories' => $categories
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {



        $product->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'quantityType' => $request->input('quantityType'),
            'price' => $request->input('price'),
        ]);

        // Update product attributes
        $product->attributes()->sync($request->input('attributes'));
        $product->categories()->sync($request->input('categories'));

        return redirect()->route('product.index')->with('success', 'Product Updated successfully.');
    }
    /**
     * Update the specified resource in storage.
     */
    public function updateProduct(Request $request)
    {


        $product =  Product::where('id', '=', $request->input('productId'))->firstOrFail();

        $files = request()->file('files');



        if (isset($files)) {

            foreach ($files as $key => $file) {
                $name = $file->hashName();



                if ($key == 0) {

                    if (Storage::exists('public/' . str_replace(' ', '', $product->product_img1))) {
                        Storage::delete('public/' . str_replace(' ', '', $product->product_img1));
                    }

                    $file->storeAs(
                        'public/' . str_replace(' ', '', $request->name),
                        $name
                    );

                    $product->product_img1 = str_replace(' ', '', $request->name) . '/' . $name;
                    $product->save();
                }

                if ($key == 1) {
                    if (Storage::exists('public/' . str_replace(' ', '', $product->product_img2))) {
                        Storage::delete('public/' . str_replace(' ', '', $product->product_img2));
                    }

                    $file->storeAs(
                        'public/' . str_replace(' ', '', $request->name),
                        $name
                    );

                    $product->product_img2 = str_replace(' ', '', $request->name) . '/' . $name;
                    $product->save();
                }

                if ($key == 2) {
                    if (Storage::exists('public/' . str_replace(' ', '', $product->product_img3))) {
                        Storage::delete('public/' . str_replace(' ', '', $product->product_img3));
                    }

                    $file->storeAs(
                        'public/' . str_replace(' ', '', $request->name),
                        $name
                    );

                    $product->product_img3 = str_replace(' ', '', $request->name) . '/' . $name;
                    $product->save();
                }
            }
        }


        $product->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'quantityType' => $request->input('quantityType'),
            'price' => $request->input('price'),
        ]);

        // Update product attributes
        $product->attributes()->sync($request->input('attributes'));
        $product->categories()->sync($request->input('categories'));

        return redirect()->route('product.index')->with('success', 'Product "' . $product->name . '" Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {

        try {
            if (Storage::exists('public/' . str_replace(' ', '', $product->name))) {
                Storage::deleteDirectory('public/' . str_replace(' ', '', $product->name));
            }


            $product->delete();

            return redirect(route('product.index'))->with('message', 'The product "' . $product->name . '" and its associated image have been deleted successfully.');
        } catch (\Exception $e) {

            return redirect()->back()->with('message', 'An error occurred while deleting the product.');
        }
    }
}
