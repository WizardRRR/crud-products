<?php

use App\Http\Controllers\ProductsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

// crud products `api`
Route::get('/product', [ProductsController::class, 'getAll'])->name('product.getAll');
Route::get('/product/{id}', [ProductsController::class, 'show'])->name('product.show');
Route::post('/product', [ProductsController::class, 'store'])->name('product.store');
Route::put('/product/{id}', [ProductsController::class, 'update'])->name('product.update');
Route::delete('/product/{id}', [ProductsController::class, 'destroy'])->name('product.destroy');
