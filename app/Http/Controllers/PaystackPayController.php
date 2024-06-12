<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderImage;
use App\Models\OrderItem;
use App\Models\OrderItemAttribute;
use App\Models\Product;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PaystackPayController extends Controller
{
    public function  callbackPaystack(Request $request)
    {

        // Retrieve cart items from session
        $cartItems = session()->get('cart.items', []);

        $reference = $request->reference;
        $secret_key = 'sk_test_d05d4196904b2d24c0ea0e41513f0bae1df61141';
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.paystack.co/transaction/verify/" . $reference,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer $secret_key",
                "Cache-Control: no-cache",
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        $response = json_decode($response);

        $meta_data = $response->data->metadata;


        $shippingCost = 0;

        if ($meta_data->shippingType == 'ME') {

            $shippingCost = 5000;
        }

        if ($meta_data->shippingType == 'OFFICE') {

            $shippingCost = 2000;
        }




        if (Auth::check()) {
            // Create a new order
            $order = Order::create([
                'user_id' => Auth::id(),  // Assuming you're using Laravel's built-in authentication
                'total_amount' => $meta_data->amount ?? null,
                'email' => $meta_data->email ?? null,
                'shippingType' => $meta_data->shippingType ?? null,
                'DeliveryLocation' => $meta_data->DeliveryLocation ?? null,
                'reference_number' => 'Ref-' . $request->reference ?? null,
                'DeliveryState' => $meta_data->state ?? null,
                'DeliveryAddress' => $meta_data->address  ?? null,
                'status' => 'paid'
            ]);
        } else {

            $prefix = "new_user_";
            $email = $prefix . uniqid() . '@printcenter.com';
            $user = User::create([
                'first_name' => $meta_data->first_name,
                'last_name' => $meta_data->last_name,
                'email' => $email,
                'phone_number' => $meta_data->phone_number,
                'state' => $meta_data->state,
                'password' => '123456789',
                'status' => 'NR',
            ]);


            // Create a new order
            //$user->email ?? 'no-email@example.com';
            $order = Order::create([
                'user_id' => $user->id,  // Assuming you're using Laravel's built-in authentication
                'total_amount' => $meta_data->amount ?? null,
                'email' => $meta_data->email ?? null,
                'shippingType' => $meta_data->shippingType ?? null,
                'DeliveryLocation' => $meta_data->DeliveryLocation ?? null,
                'reference_number' => 'Ref-' . $request->reference ?? null,
                'DeliveryState' => $meta_data->state ?? null,
                'DeliveryAddress' => $meta_data->address  ?? null,
                'status' => 'paid'
            ]);
        }

        // Add items from cart to order
        foreach ($cartItems as $productId => $cartItem) {


            // Calculate expected delivery date
            $deliveryType = $cartItem['delivery'];
            $expectedDeliveryDate = $this->calculateExpectedDeliveryDate($deliveryType);

            $product = Product::find($cartItem['product_id']);
            if ($product) {
                $orderItem = OrderItem::create([
                    'order_id' => $order->id,
                    'product_id' => $cartItem['product_id'],
                   
                    'quantity' => $cartItem['quantity'],
                    'deliveryPeriod' => $cartItem['delivery'],
                    'hireDesigner' => $cartItem['hireDesigner'],
                    'designDescription' => $cartItem['designDescription'],
                    'quantity' => $cartItem['quantity'],
                    'expectedDeliveryDate' => $expectedDeliveryDate->toDateString(),
                    'price' => $product->price,
                ]);


                foreach ($cartItem['selectedOptions'] as $attribute_id => $option_id) {


                    OrderItemAttribute::create([
                        'order_item_id' => $orderItem->id,
                        'product_attribute_id' => $attribute_id,
                        'option_id' => $option_id,
                    ]);
                }

                foreach ($cartItem['files'] as $file) {
                    OrderImage::create([
                        'order_item_id' => $orderItem->id,
                        'file' => $file,
                    ]);
                }
            }
        }

        return redirect(route('payment-success', $order->id));
    }


    private function calculateExpectedDeliveryDate($deliveryType)
    {
        $currentDate = Carbon::now();

        switch ($deliveryType) {
            case 'Standard':
                $daysToAdd = 14;
                break;
            case 'Express':
                $daysToAdd = 7;
                break;
            case 'Next Day':
                $daysToAdd = 1;
                break;
            default:
                $daysToAdd = 14; // Default to 14 days for unknown delivery types
        }

        $expectedDeliveryDate = $currentDate;
        $workingDaysAdded = 0;

        while ($workingDaysAdded < $daysToAdd) {
            $expectedDeliveryDate->addDay();
            if (!$expectedDeliveryDate->isWeekend()) {
                $workingDaysAdded++;
            }
        }

        return $expectedDeliveryDate;
    }
}
