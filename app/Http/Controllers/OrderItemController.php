<?php

namespace App\Http\Controllers;

use App\Models\OrderItem;
use App\Models\OrderStatus;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function show(OrderItem $orderItem)
    {
        //
    }

    public function updateStatus(Request $request, $OrderitemId)
    {
        // Validate the request data
        $request->validate([
            'status' => 'required|string|in:Pending,Order Processed,Order Shipped,Order En Route,Order Arrived',
        ]);

        // Find the order item by ID and update the status
        $orderStatus = OrderStatus::where('order_item_id', $OrderitemId)->firstOrFail();
        $orderStatus->status = $request->status;
        $orderStatus->save();

        return response()->json(['message' => 'Order item status updated successfully.']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(OrderItem $orderItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, OrderItem $orderItem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(OrderItem $orderItem)
    {
        //
    }
}
