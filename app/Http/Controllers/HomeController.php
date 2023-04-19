<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function about_get()
    {
        return Inertia::render('Home/About');
    }
    public function contact_get()
    {
        return Inertia::render('Home/Contact');
    }
}
