<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;

//importamos modelo
use Inertia\Inertia;

class ProductosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Producto::all();
        return Inertia::render('Producto/Index', [
            'productos' => $productos,
        ]);
    }

    public function create()
    {
        return Inertia::render('Producto/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|max:255',
            'marca' => 'required|max:255',
            'precio' => 'required|numeric',
            'fvencimiento' => 'required|date',
        ]);

        $producto = new Producto;
        $producto->nombre = $request->nombre;
        $producto->marca = $request->marca;
        $producto->precio = $request->precio;
        $producto->fvencimiento = $request->fvencimiento;

        $producto->save();

        return redirect()->route('productos.index')
            ->with('success', 'Producto creado exitosamente.');
    }

    public function edit(string $id)
    {
        $producto = Producto::find($id);
        return Inertia::render('Producto/Edit', [
            'producto' => $producto,
        ]);
    }

    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'nombre' => 'required|max:255',
            'marca' => 'required|max:255',
            'precio' => 'required|numeric',
            'fvencimiento' => 'required|date',
        ]);

        $producto = Producto::find($id);
        $producto->nombre = $request->nombre;
        $producto->marca = $request->marca;
        $producto->precio = $request->precio;
        $producto->fvencimiento = $request->fvencimiento;

        $producto->save();

        return redirect()->route('productos.index')
            ->with('success', 'Producto actualizado exitosamente.');
    }

    public function destroy(string $id)
    {
        $producto = Producto::find($id);
        $producto->delete();

        return redirect()->route('productos.index')
            ->with('success', 'Producto eliminado exitosamente.');
    }
}
