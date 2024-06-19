<?php

namespace App\Http\Controllers;

use App\Models\QuotesRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;

class QuotesRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $user = Auth::user();

        if ($user->isAdmin()) {

            $QuoteRequest = QuotesRequest::orderBy('created_at', 'desc')->paginate(10);
            return Inertia::render('QuotesRequest/Index', ['QuoteRequest' => $QuoteRequest]);
        }else{
            $QuoteRequest = QuotesRequest::where('user_id', Auth::id())->orderBy('created_at', 'desc')->paginate(10);
            return Inertia::render('QuotesRequest/Index', ['QuoteRequest' => $QuoteRequest]);
        }

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('QuoteForm');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        if(Auth::check()){


            $request->validate([
                'phone_number'=> 'required',
                'address'=> 'required',
                'artwork'=> 'required',
                'quote'=> 'required',
    
            ]);
    
    
            QuotesRequest::create([
                'user_id'=> auth()->user()->id,
                'full_name'=> auth()->user()->first_name . ' '. auth()->user()->last_name ,
                'email'=> auth()->user()->email,
                'phone_number'=> $request->phone_number,
                'address'=> $request->address,
                'artwork'=> $request->artwork,
                'quote'=> $request->quote,

            ]);
            return redirect()->back()->with('message','Request Sent Successfully');


        }else{

            

            $request->validate([
                'full_name'=> 'required',
                'phone_number'=> 'required',
                'email'=> 'required',
                'address'=> 'required',
                'artwork'=> 'required',
                'quote'=> 'required',
    
            ]);
    
            $uniqueId = Str::uuid();
            QuotesRequest::create([
                'user_id'=> $uniqueId,
                'full_name'=> $request->full_name,
                'email'=> $request->email,
                'phone_number'=> $request->phone_number,
                'address'=> $request->address,
                'artwork'=> $request->artwork,
                'quote'=> $request->quote,
            ]);
            
            return redirect()->back()->with('message','Request Sent Successfully');
    
        }


    }

    /**
     * Display the specified resource.
     */
    public function show(QuotesRequest $quotesRequest)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(QuotesRequest $quotesRequest)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, QuotesRequest $quotesRequest)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(QuotesRequest $quotesRequest)
    {
        //
    }
}
