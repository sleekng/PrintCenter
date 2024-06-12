<?php

namespace App\Http\Controllers;

use App\Models\ProductAttribute;
use App\Models\ProductAttributeOption;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductAttributeController extends Controller
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
        $attributes= ProductAttribute::all();
        return Inertia::render('ProductAttribute/Index', [
            'attributes'=>$attributes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $options = ProductAttributeOption::all();
        return inertia('ProductAttribute/Create',[
            'options' => $options,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'slug' => 'required|string|max:255|unique:product_attributes,slug',
            'for_product' => 'required|string|max:255',
            'options' => 'array', // Ensure options is an array
        ]);

        $attribute = ProductAttribute::create([
            'name' => $validatedData['name'],
            'type' => $validatedData['type'],
            'slug' => $validatedData['slug'],
            'for_product' => $validatedData['for_product'],
        ]);

        $attribute->options()->attach($validatedData['options']);

        return redirect()->route('attributes.index')->with('success', 'Product attribute added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductAttribute $productAttribute)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $productAttribute = ProductAttribute::findOrfail($id);
        $attributeContainer = $productAttribute->load('options');
        $options = ProductAttributeOption::all(); // Retrieve all attributes to select from
        return Inertia::render('ProductAttribute/Edit',[
            'attribute' => $attributeContainer,
            'options' => $options
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  $id)
    {
   
        $attribute = ProductAttribute::findOrFail($id);
        
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'type' => 'required|string|max:255',
            'slug' => 'required|string|max:255|',
            'for_product' => 'required|string|max:255',
            'options' => 'array', // Ensure options is an array
        ]);

        $attribute->update([
            'name' => $validatedData['name'],
            'type' => $validatedData['type'],
            'slug' => $validatedData['slug'],
            'for_product' => $validatedData['for_product'],
        ]);

        // Update product attributes
        $attribute->options()->sync($request->input('options'));
    
        return redirect()->route('attributes.index')->with('success', 'Product attribute Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        
       $productAttribute = ProductAttribute::findOrfail($id);

                // Delete associated ProductAttributeOptions
                $productAttribute->options()->delete();

                // Delete the ProductAttribute
                $productAttribute->delete();



         return redirect()->back()->with('success', 'Product attribute deleted successfully.');
    }
}
