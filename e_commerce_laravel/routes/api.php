<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::get('/products',function(Request $request){
    $query = Product::query();

    if($request->has('category')){
        $query->where('category', $request->category);
    }

    $products =$query->get();
    return response()->json($products);
});