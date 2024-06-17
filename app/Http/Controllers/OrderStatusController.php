<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderStatusController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('OrderTracking');
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($orderNumber)
    {
        try {
            $order = Order::where('reference_number', $orderNumber)
                ->with(['orderItems.status', 'orderItems.product'])
                ->firstOrFail();
    
            return response()->json([
                'success' => true,
                'order' => $order,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Order not found.', // Adjust the message as per your application logic
            ], 404); // Adjust the status code as per your needs
    }

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderStatus $orderStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderStatus $orderStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderStatus $orderStatus)
    {
        //
    }
}
