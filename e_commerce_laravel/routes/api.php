<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;

Route::middleware('auth:sanctum')->group(function (){
Route::post('/logout',[AuthController::Class, 'logout']);
Route::get('/user',[AuthController::Class, 'user']);
Route::post('/orders',[OrderController::Class,'store']);

Route::get('/products',function(Request $request){
    $query = Product::query();

    if($request->has('category')){
        $query->where('category', $request->category);
    }

    $products =$query->get();
    return response()->json($products);
});
});

Route::post('/register',[AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

