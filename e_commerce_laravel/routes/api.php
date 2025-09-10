<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('/products',function(){
    $products =Product::all();
    return response()->json($products);
});