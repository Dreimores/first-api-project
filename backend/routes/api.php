<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');

Route::get('/hello', function() {
  return response()->json([
    'message' => 'Hello World!'
  ]);
});

// create user ( POST )
Route::post('/users', function(Request $request) {
  $user = User::create([
    'name'     => $request->name,
    'email'    => $request->email,
    'password' => Hash::make($request->password)
  ]);

  return $user;
});

// get user (GET)
Route::get('/users/{user}', function(User $user) {
  return $user;
});

// update user (PATCH)
Route::patch('/users/{user}', function(Request $request, User $user) {
  $user->update([
    'name'     => $request->name,
  ]);
  return $user;
});

// get all users (GET)
Route::get('/users', function() {
  return User::all();
});

// delete user (DELETE)
Route::delete('/users/{user}', function(User $user) {
  $user->delete();
  return response()->noContent();
});