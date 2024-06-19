<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderImage;
use App\Models\OrderItem;
use App\Models\OrderItemAttribute;
use App\Models\Product;
use App\Models\ProductAttributeOption;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth')->except('store');
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $user = Auth::user();

        if ($user->isAdmin()) {

            $orders = Order::with([
                'orderItems.product',
                'orderItems.attributes',
                'orderItems.options',
                'orderItems.status',
                'orderItems.orderimages',
            ])->orderBy('created_at', 'desc')->paginate(10);
             
                
                return Inertia::render(
                    'Orders/Index',
                    [
                        'orders' => $orders
                        ]
                        
                        );
                        } else {
                            $orders = Order::where('user_id', Auth::id())
                            ->with([
                                'orderItems.product',
                                'orderItems.attributes',
                                'orderItems.options',
                                'orderItems.status',
                                'orderItems.orderimages',
                                ])->orderBy('created_at', 'desc')->paginate(10);
                            

            return Inertia::render(
                'Orders/Index',
                [
                    'orders' => $orders
                ]

            );
        }
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
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
            'state' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'shippingType' => 'required|string|max:255',
        ], [
            'state.required' => 'Please select a state',
            'location.required' => 'Please enter location',
            'address.required' => 'Please enter address',

        ]);

        // Retrieve cart items from session
        $cartItems = session()->get('cart.items', []);


        // Calculate total amount
        $totalOptionsCost = [];
        $deliveryCost = 0;
        $SubTotalAmount = 0;
        $designCost = 0;
        $sumCost = [];
        $shippingCost = 0;

        
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


        if ($request->shippingType == 'ME') {

            $shippingCost = 5000;
        }

        if ($request->shippingType == 'OFFICE') {

            $shippingCost = 2000;
        }

        $TotalAmount = array_sum(array_filter($sumCost)) + array_sum(array_filter($totalOptionsCost)) + $shippingCost;

  
        /* Payment starts here */

        $url = "https://api.paystack.co/transaction/initialize";

        $fields = [

            'email' => $request->email,

            'amount' => $TotalAmount * 100,

            'callback_url' => route('paystack-pay'),

            'metadata' => [
                "cancel_action" => redirect()->back(),
                'first_name' => $request->first_name,
                'email' => $request->email,
                'last_name' => $request->last_name,
                'phone_number' => $request->phone_number,
                'state' => $request->state,
                'address' => $request->address,
                'shippingType' => $request->shippingType,
                'status' => $request->status,
                'DeliveryState' => $request->DeliveryState,
                'DeliveryLocation' => $request->location,
                'membership_number' => $request->membership_number,
                'createAccount' => $request->createAccount,
                'amount' => $TotalAmount
            ]

        ];

        $fields_string = http_build_query($fields);
        $ch = curl_init();


        //set the url, number of POST vars, POST data
        curl_setopt($ch, CURLOPT_URL, $url);

        curl_setopt($ch, CURLOPT_POST, true);

        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);

        curl_setopt($ch, CURLOPT_HTTPHEADER, array(

            "Authorization: Bearer sk_test_d05d4196904b2d24c0ea0e41513f0bae1df61141",

            "Cache-Control: no-cache",

        ));

        //So that curl_exec returns the contents of the cURL; rather than echoing it
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        //execute post
        $response  = curl_exec($ch);



        // Check for cURL errors
        if (curl_errno($ch)) {
            echo 'Curl error: ' . curl_error($ch);
        }

        // Close cURL session
      curl_close($ch);



        // Parse the response to extract the authorization URL
        $data = json_decode($response, true); // Assuming the response is in JSON format
        if ($data && isset($data['data']['authorization_url'])) {
            $access_code = $data['data']['access_code'];


            // Store updated cart items in sessionn  
            session()->put('totalAmount', $TotalAmount);

            return redirect()->route('paynow', $access_code);

            /* return  Inertia::render('Auth/Payment', [
                'authorizationUrl' => $authorization_url,
                'paymentDetails'=>$request
        ]); */
        } else {
            return redirect()->back()->with('error', 'Network Error, try again');
        }

        return redirect()->back()->with('error', 'Network Error, try again');
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
