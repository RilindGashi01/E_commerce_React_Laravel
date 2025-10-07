<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name'=>'required|string|max:255',
            'email'=>'required|string|email|max:255|unique:users',
            'password'=>'required|string|min:8|confirmed',
        ]);


        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()],422);
            }
        $user = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> Hash::make($request->password),
        ]);
        Auth::login($user);
        $token=$user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user'=> $user,
            'token'=>$token,
            'message'=>"User registred successfully",
        ],201);
    }
    public function login(Request $request){
        $validator =Validator::make($request->all(),[
            'email'=>'required|email',
            'password'=>'required',
        ]);

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors],422);
        }

        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['message'=>'Invalid credentials'],401);
        }

        $user = Auth::User();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token'=> $token,
            'message' => 'Login successful'
        ]);
    }
    public function logout(Request $request){
        $request->user()->currentAccessToken->delete();

        return response()->json(['message'=>'Logged out successfully']);
    }
    public function user(Request $request){
        return response()->json(['user'=>$request->user()]);
    }
}
