<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(),[
            'items'=>'required|array|min:1',
            'items.*.id'=>'required',
            'items.*.name'=>'required|string',
            'items.*.price'=>'required|numeric|min:0',
            'items.*.quantity'=>'required|integer|min:1',
            'Total'=>'required|numeric|min:0',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'error' => 'Validation failed',
                'messages' => $validator->errors()
            ], 422);
        }
        DB::beginTransaction();
        try{
            $order = Order::create([
                'user_id'=>auth()->id(),
                'total_amount'=>$request->Total
            ]);
            foreach($request->items as $item){
                OrderItem::create([
                    'order_id'=>$order->id,
                    'product_id'=>$item['id'],
                    'quantity'=>$item['quantity'],
                    'unit_price'=>$item['price'],
                    'total_price'=>$item['quantity']*$item['price'],
                ]);
            }
         DB::commit();
         $order->load('orderItems');
            return response()->json([
                'message'=>'Order created successfully',
                'order_id'=> $order->id,
                'order'=> $order
            ],201);
        }catch(\Exception $e){
        DB::rollBack();
        return response()->json([
                'error' => 'Order creation failed',
                'message' => $e->getMessage()
            ], 500);
    }
    }

}
