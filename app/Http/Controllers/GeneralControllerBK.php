<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeOption;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class GeneralController extends Controller
{
  
    public function checkout() {


        // Retrieve cart items from session
        $cartItems = session()->get('cart.items', []);

        // Initialize an empty array to hold detailed cart items
        $detailedCartItems = [];


        foreach ($cartItems as $productId => $cartItem) {
            // Retrieve the product
            $product = Product::find($productId);

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


        return Inertia::render('Checkout', [
            'cart' => $detailedCartItems,
        ]);

    }


    public function subtotal(Request $request) {

        Session::put('subTotal', $request->subTotal);

        return response()->json([
            'message' => 'Cart updated successfully',
        ]);



    }

    
}
