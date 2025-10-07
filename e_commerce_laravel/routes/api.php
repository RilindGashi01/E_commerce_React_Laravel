<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Product;

Route::middleware('auth:sanctum')->group(function (){
Route::post('/logout',[AuthController::Class, 'logout']);
Route::post('/user',[AuthController::Class, 'user']);

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

