<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
    public function index(){
    
        $user = Auth::user();

        if ($user->isAdmin()) {
            // The user is an admin
            // Perform admin-specific actions
        return Inertia::render('Auth/Users');
            } else {
            // The user is not an admin
            // Perform other actions or show an error
            return 'you are not allowed to view this page <a href="/dashboard">home</a> ';
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
            'role' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);


       $user= User::create($request->all());

       // Return a successful response
       return response()->json(['message' => 'User created successfully'], 200);



    }

   public function loadUser(){
            $users = User::all();
            return response()->json(['message' => 'User created successfully', 'users'=> $users], 200);
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'phone_number' => 'required|string|max:255',
        ]);


        $user =User::find($id);
        $user->update($request->all());
        $user->save();

       // Return a successful response
       return response()->json(['message' => $user->first_name." was updated successfully"], 200);


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       $user = User::find($id);
       $user->delete();
       
       // Return a successful response
       return response()->json(['message' => 'User deleted successfully'], 200);
    }
}
