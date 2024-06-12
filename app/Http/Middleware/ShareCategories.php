<?php

namespace App\Http\Middleware;

use App\Models\Category;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class ShareCategories
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // Retrieve cart items from session
        $cartItems = session()->get('cart.items', []);
        $CartCount = count($cartItems);

        Inertia::share(
           
            [
                'navcategories' => Category::with('products')->get(),
                'CartCount' => $CartCount,
            ]
           
        );
        return $next($request);
    }
}
