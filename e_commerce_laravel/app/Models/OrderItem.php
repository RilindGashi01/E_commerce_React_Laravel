<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable =[
        'order_id',
        'product_id',
        'quantity',
        'unit_price',
        'total_price'
    ];

    protected $casts = [
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2',
        'quantity'=> 'integer'
    ];
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    public function calculateTotalPrice()
    {
        return $this->quantity * $this->unit_price;
    }
    public function updateTotalPrice()
    {
        $this->total_price = $this->calculateTotalPrice();
        $this->save();
    }
    public function getFormattedTotalPrice()
    {
        return '$'. number_format($this->total_price,2);
    }
    public function getFormattedUnitPrice()
    {
        return '$'. number_format($this->unit_price,2);
    }
}
