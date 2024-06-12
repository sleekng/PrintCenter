<?php

namespace App\Http\Controllers;

use App\Models\ProductAttributeOption;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductAttributeOptionController extends Controller
{

    public function __construct()
    {
        $this->middleware('admin');
    }



    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $options = ProductAttributeOption::all();
        return Inertia::render('AttributeOption/Index', [
            'options'=>$options
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('AttributeOption/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
 
        $validatedData = $request->validate([
            'value' => 'required|string|max:255',
            'for' => 'required|string|max:255',
            'cost' => 'required|regex:/^[0-9]+$/',
        ],[
            'value.required'=>'Please enter Name',
            'for.required'=>'Please enter which product this option is for',
            'cost.required'=>'Please enter Cost',
            'cost.regex'=>'Only numbers are allowed.'
        ]);
    
        ProductAttributeOption::create($validatedData);
    
        return redirect()->route('product-attribute-options.index')->with('success', 'Product attribute option added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {

        $option = ProductAttributeOption::findOrfail($id);

        return Inertia::render('AttributeOption/Edit',[
            'option' => $option
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $validatedData = $request->validate([
            'value' => 'required|string|max:255',
            'for' => 'required|string|max:255',
            'cost' => 'required|regex:/^[0-9]+$/',
        ],[
            'value.required'=>'Please enter Option',
            'for.required'=>'Please enter which product this option is for',
            'cost.required'=>'Please enter Cost',
            'cost.regex'=>'Only numbers are allowed.'
        ]);

        $option = ProductAttributeOption::findOrFail($id);

        $option->update([
            'value' => $request->input('value'),
            'cost' => $request->input('cost'),
            'for' => $request->input('for'),
        ]);
    
        return redirect()->route('options.index')->with('success', 'Product attribute Option Updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
                // Find the option by ID
        $option = ProductAttributeOption::findOrFail($id);

        // Delete the option and its related pivot entries
        $option->delete();

        return redirect()->back()->with('success', 'Product attribute option deleted.');
    }
}
