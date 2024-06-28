<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeOption;
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
        $products = Product::orderBy('created_at', 'desc')->paginate(10);
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
            'slug' => 'required|string|max:255|unique:products',
            'description' => 'nullable|string',
            'unit' => 'required|string|max:255',
            'quantityType' => 'required|string',
            'price' => 'required|numeric', // Ensure price is a numeric value
            'attributes' => 'required|array',
            'categories' => 'array',
            'attributes.*.name' => 'required|string|max:255',
            'attributes.*.type' => 'required|string',
            'attributes.*.options' => 'nullable|array',
            'attributes.*.options.*.value' => 'required|string|max:255',
            'attributes.*.options.*.cost' => 'nullable|numeric',
        ], [
            'categories' => 'Atleast one category must be selected',
            'attributes.required' => 'Atleast one Attribute(s) must be Added'
        ]);





        $product = Product::create([
            'name' => $validatedData['name'],
            'unit' => $validatedData['unit'],
            'description' => $validatedData['description'],
            'featured' => $request->featured,
            'price' => $validatedData['price'],
            'slug' => $validatedData['slug'],
            'quantityType' => $validatedData['quantityType'],
        ]);

        $files = request()->file('files');


        if (count($files)  > 0) {
            for ($i = 0; $i < count($files); $i++) {
                $name = $files[$i]->hashName(); // Generate a unique, random name...
                /* $extension = $files[$i]->extension(); // Determine the file's extension based on the file's MIME type... */

            /*     $files[$i]->storeAs(
                    'public/' . str_replace(' ', '', $request->name),
                    $name
                ); */

                $files[$i]->store(str_replace(' ', '', $request->name), 'public');



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


        foreach ($request['attributes'] as $attributeData) {
            $attribute = ProductAttribute::create([
                'product_id' => $product->id,
                'name' => $attributeData['name'],
                'type' => $attributeData['type'],
            ]);



            if (in_array($attribute->type, ['radio', 'radio_single', 'select']) && isset($attributeData['options'])) {
                foreach ($attributeData['options'] as $optionData) {
                    $option = new ProductAttributeOption([
                        'value' => $optionData['value'],
                        'cost' => $optionData['cost'],
                    ]);
                    $attribute->options()->save($option);
                }
            }
        }

        if (isset($validatedData['categories'])) {

            $product->categories()->attach($validatedData['categories']);
        }

        return redirect()->route('product.index')->with('success', 'Product created successfully!');
    }


    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        
        $breadcrumbs = [
            ['link'=> route('product.index'), 'text'=>'Products'],
            ['link'=> route('product.show',$product->id),'text'=> $product->name]

        ];

        $products = Product::all();

        $productPack = $product->load('attributes.options');

        $categories = Category::with('products')->get();


        return Inertia::render('Product/Show', [
            'product' => $productPack,
            'navOptions' => $categories,
            'breadcrumbs' => $breadcrumbs,
            'products' => $products
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        // Assuming you have relationships defined in your Product model
        $product->load('categories', 'attributes', 'attributes.options');

        // Fetch all categories for checkbox selection
        $categories = Category::all();

        // Return view with necessary props for Inertia.js
        return inertia('Product/Edit', [
            'categories' => $categories,
            'product' => $product,
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
            'featured' => $request->featured,
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


    
    public function updateProduct(Request $request, Product $product)
    {
        
        return $request;
    
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:products,slug,' . $product->id,
            'description' => 'nullable|string',
            'unit' => 'required|string|max:255',
            'quantityType' => 'required|string',
            'price' => 'required|numeric',
            'attributes' => 'required|array',
            'categories' => 'array',
            'attributes.*.name' => 'required|string|max:255',
            'attributes.*.type' => 'required|string',
            'attributes.*.options' => 'nullable|array',
            'attributes.*.options.*.value' => 'required|string|max:255',
            'attributes.*.options.*.cost' => 'nullable|numeric',
        ], [
            'categories' => 'Atleast one category must be selected',
            'attributes.required' => 'Atleast one Attribute(s) must be Added'
        ]);
    
        $product = Product::findOrFail($product->id);
    
        $product->update([
            'name' => $validatedData['name'],
            'unit' => $validatedData['unit'],
            'description' => $validatedData['description'],
            'featured' => $request->featured,
            'price' => $validatedData['price'],
            'slug' => $validatedData['slug'],
            'quantityType' => $validatedData['quantityType'],
        ]);
    
        $files = request()->file('files');
    
        if ($files && count($files) > 0) {
            for ($i = 0; $i < count($files); $i++) {
                $name = $files[$i]->hashName();
                
                $files[$i]->store(str_replace(' ', '', $request->name), 'public');
    
                if ($i == 0) {
                    $product->product_img1 = str_replace(' ', '', $request->name) . '/' . $name;
                }
                if ($i == 1) {
                    $product->product_img2 = str_replace(' ', '', $request->name) . '/' . $name;
                }
                if ($i == 2) {
                    $product->product_img3 = str_replace(' ', '', $request->name) . '/' . $name;
                }
            }
            $product->save();
        }
    
        $product->attributes()->delete();
    
        foreach ($request['attributes'] as $attributeData) {
            $attribute = ProductAttribute::create([
                'product_id' => $product->id,
                'name' => $attributeData['name'],
                'type' => $attributeData['type'],
            ]);
    
            if (in_array($attribute->type, ['radio', 'radio_single', 'select']) && isset($attributeData['options'])) {
                foreach ($attributeData['options'] as $optionData) {
                    $option = new ProductAttributeOption([
                        'value' => $optionData['value'],
                        'cost' => $optionData['cost'],
                    ]);
                    $attribute->options()->save($option);
                }
            }
        }
    
        if (isset($validatedData['categories'])) {
            $product->categories()->sync($validatedData['categories']);
        }
    
        return redirect()->route('product.index')->with('success', 'Product updated successfully!');
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
