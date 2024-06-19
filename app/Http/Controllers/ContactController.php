<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|max:255',
            'message' => 'required|nullable|string',
        ]);


        
        // Handle the form submission, e.g., send an email, save to database, etc.
        Contact::create($request->all());

        return redirect()->back()->with('success', 'Thank you for contacting us!');
    }
}
