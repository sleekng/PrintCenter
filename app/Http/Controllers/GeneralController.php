<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeOption;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class GeneralController extends Controller
{

    public function checkout(Request $request)
    {



        if ($request->createAccount == 'loggedIn') {
            // Attempt to authenticate the user
  
                // Retrieve cart items from session
                $cartItems = session()->get('cart.items', []);

                // Calculate total amount
                $totalOptionsCost = [];
                $deliveryCost = 0;
                $SubTotalAmount = 0;
                $designCost = 0;
                $sumCost = [];

                foreach ($cartItems as $cartItem) {
                    // Retrieve the product
                    $product = Product::find($cartItem['product_id']);

                    if ($product && isset($cartItem['hireDesigner'])) {

                        if ($cartItem['delivery'] == 'Standard') {
                            $deliveryCost = 1500;
                        }
                        if ($cartItem['delivery'] == 'Express') {
                            $deliveryCost = 5000;
                        }
                        if ($cartItem['delivery'] == 'Next Day') {
                            $deliveryCost = 15000;
                        }

                        if ($cartItem['hireDesigner'] == true) {

                            $designCost = 5000;
                        }

                        $sumCost[] = ($product->price * $cartItem['quantity']) + $deliveryCost + $designCost;

                        // Iterate through selectedOptions
                        foreach ($cartItem['selectedOptions'] as $optionId) {

                            $option = ProductAttributeOption::find($optionId);

                            if ($option) {
                                $totalOptionsCost[] = ($option->cost * $cartItem['quantity']);
                            }
                        }
                    }
                }

                $SubTotalAmount = array_sum(array_filter($sumCost)) + array_sum(array_filter($totalOptionsCost));

                // Store updated cart items in session
                session()->put('SubTotalAmount', $SubTotalAmount);

                return redirect(route('checkout-proceed'));
           
        } 

        if ($request->createAccount == 'login') {
            // Attempt to authenticate the user
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
                // Authentication was successful, proceed with storing the order

                // Retrieve cart items from session
                $cartItems = session()->get('cart.items', []);

                // Calculate total amount
                $totalOptionsCost = [];
                $deliveryCost = 0;
                $SubTotalAmount = 0;
                $designCost = 0;
                $sumCost = [];

                foreach ($cartItems as $cartItem) {
                    // Retrieve the product
                    $product = Product::find($cartItem['product_id']);

                    if ($product && isset($cartItem['hireDesigner'])) {

                        if ($cartItem['delivery'] == 'Standard') {
                            $deliveryCost = 1500;
                        }
                        if ($cartItem['delivery'] == 'Express') {
                            $deliveryCost = 5000;
                        }
                        if ($cartItem['delivery'] == 'Next Day') {
                            $deliveryCost = 15000;
                        }

                        if ($cartItem['hireDesigner'] == true) {

                            $designCost = 5000;
                        }

                        $sumCost[] = ($product->price * $cartItem['quantity']) + $deliveryCost + $designCost;

                        // Iterate through selectedOptions
                        foreach ($cartItem['selectedOptions'] as $optionId) {

                            $option = ProductAttributeOption::find($optionId);

                            if ($option) {
                                $totalOptionsCost[] = ($option->cost * $cartItem['quantity']);
                            }
                        }
                    }
                }

                $SubTotalAmount = array_sum(array_filter($sumCost)) + array_sum(array_filter($totalOptionsCost));

                // Store updated cart items in session
                session()->put('SubTotalAmount', $SubTotalAmount);

                return redirect(route('checkout-proceed'));
            } else {
                // Authentication failed, redirect back with an error message
                return redirect()->back()->with('error', 'Invalid email or password');
            }
        } 
        
        if ($request->createAccount == 'guest') {

            // Retrieve cart items from session
            $cartItems = session()->get('cart.items', []);

            // Calculate total amount
            $totalOptionsCost = [];
            $deliveryCost = 0;
            $SubTotalAmount = 0;
            $designCost = 0;
            $sumCost = [];

            foreach ($cartItems as $cartItem) {
                // Retrieve the product
                $product = Product::find($cartItem['product_id']);

                if ($product && isset($cartItem['hireDesigner'])) {

                    if ($cartItem['delivery'] == 'Standard') {
                        $deliveryCost = 1500;
                    }
                    if ($cartItem['delivery'] == 'Express') {
                        $deliveryCost = 5000;
                    }
                    if ($cartItem['delivery'] == 'Next Day') {
                        $deliveryCost = 15000;
                    }

                    if ($cartItem['hireDesigner'] == true) {

                        $designCost = 5000;
                    }

                    $sumCost[] = ($product->price * $cartItem['quantity']) + $deliveryCost + $designCost;

                    // Iterate through selectedOptions
                    foreach ($cartItem['selectedOptions'] as $optionId) {

                        $option = ProductAttributeOption::find($optionId);

                        if ($option) {
                            $totalOptionsCost[] = ($option->cost * $cartItem['quantity']);
                        }
                    }
                }
            }

            $SubTotalAmount = array_sum(array_filter($sumCost)) + array_sum(array_filter($totalOptionsCost));

            // Store updated cart items in session
            session()->put('SubTotalAmount', $SubTotalAmount);

            return redirect(route('checkout-proceed'));
        }
    }
    public function ProceedToCheckout()
    {
        $SubTotalAmount = session()->get('SubTotalAmount');

        return Inertia::render('Checkout', [
            'SubTotalAmount' => $SubTotalAmount,
        ]);
    }

    public function paynow($url)
    {
        // Retrieve cart items from session
        $totalAmount = session()->get('totalAmount');


        return Inertia::render('PayNow', [
            'url' => $url,
            'totalAmount' =>  $totalAmount
        ]);
    }

    public function paymentSuccess($id)
    {
        session()->forget(['cart.items', 'totalAmount']);

        $order = Order::where('id', '=', $id)->with('user')->get();


        return Inertia::render('PaymentSucessful', [
            'order' => $order[0]
        ]);
    }

    public function subtotal(Request $request)
    {

        Session::put('subTotal', $request->subTotal);

        return response()->json([
            'message' => 'Cart updated successfully',
        ]);
    }
    
    public function products(){
        $products = Product::orderBy('created_at', 'desc')->get();;
        return response()->json([
            'products' => $products,
        ]);
    }
}
