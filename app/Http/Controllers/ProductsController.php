<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;

use Inertia\Inertia;

class ProductsController extends Controller
{

  public function index()
  {
    $products = Product::all();
    return Inertia::render('products/Products', compact('products'));
  }

  public function getALl()
  {
    try {
      $products = Product::all();
      return response()->json($products, 200);
    } catch (\Exception $e) {
      return response()->json([
        'message' => 'Error al obtener los productos',
        'error' => $e->getMessage()
      ], 500);
    }
  }

  public function store(ProductRequest $request)
  {
    try {
      $producto = new Product;
      $producto->name = $request->name;
      $producto->brand = $request->brand;
      $producto->price = $request->price;
      $producto->expiration_date = $request->expiration_date;
      $producto->save();

      return response()->json([
        'message' => 'Producto creado con éxito',
        'data' => $producto
      ], 200);
    } catch (\Exception $e) {
      return response()->json([
        'message' => 'Error al crear el producto',
        'error' => $e->getMessage()
      ], 500);
    }
  }

  public function show($id)
  {
    try {
      $product = Product::where('id', $id)->first();
      return response()->json($product, 200);
    } catch (\Exception $e) {
      return response()->json([
        'message' => 'No se pudo encontrar el producto',
        'error' => $e->getMessage()
      ], 500);
    }
  }

  public function update(ProductRequest $request, string $id)
  {
    try {
      $product = Product::where('id', $id)->first();
      $product->name = $request->name;
      $product->brand = $request->brand;
      $product->price = $request->price;
      $product->expiration_date = $request->expiration_date;
      $product->save();
      return response()->json([
        'message' => 'Producto editado con éxito',
        'data' => $product
      ], 200);
    } catch (\Exception $e) {
      return response()->json([
        'message' => 'Error al actualizar el producto',
        'error' => $e->getMessage()
      ], 500);
    }
  }

  public function destroy(string $id)
  {
    try {
      $product = Product::find($id);
      $product->delete();
      return  response()->json([
        'message' => 'producto ' . $product->name . ' eliminado con exito!',
        'product' => $product
      ], 200);
    } catch (\Exception $e) {
      return  response()->json([
        'message' => 'Error al crear el producto',
        'error' => $e->getMessage()
      ], 200);
    }
  }
}
