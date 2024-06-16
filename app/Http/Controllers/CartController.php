<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
   
        // Retrieve cart items from session
        $cartItems = session()->get('cart.items', []);
      
        $breadcrumbs = [
            ['link'=> route('home'), 'text'=>'Home'],
            ['link'=> route('home'),'text'=>  'Product'],
            ['link'=> route('cart'),'text'=>  'Cart']

        ];
        // Initialize an empty array to hold detailed cart items
        $detailedCartItems = [];


        foreach ($cartItems as $cartItemId => $cartItem) {
            // Retrieve the product
            $product = Product::find($cartItems[$cartItemId]['product_id']);

            if ($product && isset($cartItem['hireDesigner'])) {
                // Initialize an empty array to hold attribute details
                $attributeDetails = [];



                // Iterate through selectedOptions
                foreach ($cartItem['selectedOptions'] as $attributeId => $optionId) {
                    // Retrieve the attribute
                    $attribute = ProductAttribute::find($attributeId);

                    // Retrieve the option
                    $option = ProductAttributeOption::find($optionId);

                    if ($attribute && $option) {
                        // Add attribute and option details to attributeDetails array
                        $attributeDetails[] = [
                            'attribute' => $attribute->name,
                            'value' => $option->value,
                            'cost' => $option->cost,
                        ];
                    }
                }

   


                // Add detailed cart item to detailedCartItems array
                $detailedCartItems[] = [
                    'cartItemId' => $cartItem['cartItemId'],
                    'product' => $product,
                   
                    'delivery' => $cartItem['delivery'],
                    'hireDesigner' => $cartItem['hireDesigner'],
                    'designDescription' => $cartItem['designDescription'],
                    'files' => $cartItem['files'],
                    'quantity' => $cartItem['quantity'],
                    'attributeDetails' => $attributeDetails,
                ];
                
            }
        }

        return Inertia::render('Cart', [
            'cart' => $detailedCartItems,
            'breadcrumbs' => $breadcrumbs
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
    
        session()->forget('cart.Pitems');
        $productId = $request->input('product_id');
        $selectedOptions = $request->input('selectedOptions');
        $delivery = $request->input('delivery');
        $quantity = $request->input('quantity'); // Default quantity is 1
    
        // Retrieve cart items from session
        $cartItems = session()->get('cart.Pitems', []);
    
        // Generate a unique cart item ID
        $cartItemId = Str::uuid()->toString();
    
        // Add new item to the cart
        $cartItems[$cartItemId] = [
            'cartItemId' => $cartItemId,
            'product_id' => $productId,
            'selectedOptions' => $selectedOptions,
            'delivery' => $delivery,
            'quantity' => $quantity,
            'designDescription' => null,
            'files' => null,
        ];
    
        // Store updated cart items in session
        session()->put('cart.Pitems', $cartItems);
    
        return redirect()->route('cart.show', $cartItemId);
    }

    /**
     * Display the specified resource.
     */
    public function show($cartItemId)
    {

        // Retrieve cart items from session
        $cartPItems = session()->get('cart.Pitems', []);
    
        // Retrieve cart items from session
 /*        $cartItems = session()->get('cart.items', []); */

      

        // Initialize an empty array to hold detailed cart items
        $detailedCartItems = [];

        $product = Product::find($cartPItems[$cartItemId]['product_id']);

        if ($product && $cartPItems) {
            // Initialize an empty array to hold attribute details
            $attributeDetails = [];


            // Iterate through selectedOptions
            foreach ($cartPItems[$cartItemId]['selectedOptions'] as $attributeId => $optionId) {
                // Retrieve the attribute
                $attribute = ProductAttribute::find($attributeId);

                // Retrieve the option
                $option = ProductAttributeOption::find($optionId);

                if ($attribute && $option) {
                    // Add attribute and option details to attributeDetails array
                    $attributeDetails[] = [
                        'attribute' => $attribute->name,
                        'value' => $option->value,
                        'cost' => $option->cost,
                    ];
                }
            }

            // Add detailed cart item to detailedCartItems array
            $detailedCartItems[] = [
                'cartItemId' => $cartItemId,
                'product' => $product,
                'delivery' => $cartPItems[$cartItemId]['delivery'],
                'quantity' => $cartPItems[$cartItemId]['quantity'],
                'attributeDetails' => $attributeDetails,
            ];


      
        } else {
            return redirect()->route('product.show', $cartPItems[$cartItemId]['product_id']);
        }
        $breadcrumbsProduct = Product::find($cartPItems[$cartItemId]['product_id']);

        $breadcrumbs = [
            ['link'=> route('product.index'), 'text'=>'Products'],
            ['link'=> route('product.show', $breadcrumbsProduct->id),'text'=>  $breadcrumbsProduct->name],
            ['link'=> route('product.show', $breadcrumbsProduct->id),'text'=>  'Upload Artwork']

        ];


        return Inertia::render('Product/uploadArtwork', [
            'product' => $detailedCartItems,
            'breadcrumbs' => $breadcrumbs,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $cartItemId)
    {

        $quantity = $request->input('quantity');

        // Retrieve cart items from session
        $cartItems = session()->get('cart.items', []);

      

        // Check if the product is in the cart
        if (isset($cartItems[$cartItemId])) {
            // Update the quantity of the existing item
            $cartItems[$cartItemId]['quantity'] = $quantity;

            // Store updated cart items in session
            session()->put('cart.items', $cartItems);

            return response()->json([
                'message' => 'Cart updated successfully',
                'cart' => $cartItems,
            ]);
        }

        return response()->json([
            'message' => 'Cart item not found contact  Administrator',
        ], 404);
    }
    /**
     * Update the specified resource in storage.
     */
    public function updateCart(Request $request, $cartItemId)
    {
        if ($request->input('hireDesigner') == true) {
            $request->validate([
                "designDescription" => 'required|string',
            ]);
        }
    
        // Check if files are present in the request
        if ($request->input('files') !== null) {
            $designDescription = $request->input('designDescription');
            $files = $request->input('files');
            $hireDesigner = $request->input('hireDesigner');
    
            // Retrieve cart items from session
            $cartPItems = session()->get('cart.Pitems', []);
            $cartItems = session()->get('cart.items', []);
    
            // Check if the product is in the cart
            if (isset($cartPItems[$cartItemId])) {
                // Update the item
                $cartPItems[$cartItemId]['designDescription'] = $designDescription;
                $cartPItems[$cartItemId]['files'] = $files;
                $cartPItems[$cartItemId]['hireDesigner'] = $hireDesigner;
    
                // Merge cart.Pitems into cart.items
                $cartItems = array_merge($cartItems, $cartPItems);
               
                // Store updated cart items in session
                session()->put('cart.items', $cartItems);
    
                // Clear cart.Pitems from session
                session()->forget('cart.Pitems');
    
                return redirect()->route('cart.index')->with('success', 'Your item has been added successfully');
            }
    
            return redirect()->route('product.show', $cartPItems[$cartItemId]['product_id']);
        } else {
            // Return an error response if no files were uploaded
            return redirect()->back()->with('error', 'No files were uploaded');
        }
    }
    

    public function remove(Request $request, $cartItemId)
    {
       // Retrieve cart items from session
       $cartItems = session()->get('cart.items', []);

        // Check if the product is in the cart
        if (isset($cartItems[$cartItemId])) {

            foreach ($cartItems[$cartItemId]['files'] as $index => $file) {

                if (Storage::exists('public/' . $file)) {
                    Storage::delete('public/' . $file);
                }
            }

            // Remove the item from the cart
            unset($cartItems[$cartItemId]);

            // Store updated cart items in session
            session()->put('cart.items', $cartItems);

             // Optionally, you can add a flash message for user feedback
             return redirect()->route('cart.index')->with('success', 'Item removed successfully');
        }

        return redirect()->route('cart.index')->with('error', 'Item not found in cart');
    }

    /**
     * Clear cart.
     *
     * @return \Illuminate\Http\Response
     */
    public function clear()
    {

        $cartItems = session()->get('cart.items', []);

        foreach ($cartItems as $index => $cartItem) {


            foreach ($cartItem['files'] as $index => $file) {

                if (Storage::exists('public/' . $file)) {
                    Storage::delete('public/' . $file);
                }
            }
        }

        // Clear cart items from session
        session()->forget('cart.items');

        return redirect()->route('cart.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        //
    }


    public function artwork(Request $request)
    {

        // Validate the request
        $request->validate([
            'files.*' => 'required|file|max:10240', // max:10240 means 10 MB limit
        ]);

        $uploadedFiles = [];

        // Check if files are present in the request
        if ($request->hasFile('files')) {
            // Handle multiple file uploads
            foreach ($request->file('files') as $index => $file) {
                // Generate a unique name for the file
                $fileName = time() . '_' . $file->getClientOriginalName();

                // Store the file in the storage/app/public directory
                $file->storeAs('public/artwork', $fileName);

                // Store the file path to use it later if needed
                $uploadedFiles[] = 'artwork/' . $fileName;
            }
        } else {

            // Return an error response if no files were uploaded
            return response()->json(['message' => 'No files were uploaded'], 400);
        }

        // Return a success response with the uploaded file paths
        return response()->json(['message' => 'Files uploaded successfully', 'files' => $uploadedFiles]);
    }

    public function deleteFile(Request $request)
    {
        // Validate the request
        $request->validate([
            'filePath' => 'required|string',
        ]);

        // Delete the file from the storage

        if (Storage::exists('public/' . $request->filePath)) {
            Storage::delete('public/' . $request->filePath);
            return response()->json(['message' => 'File deleted successfully']);
        } else {
            return response()->json(['message' => 'File not found'], 404);
        }
    }
}
