<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table)
        {
            //por defecto se crear la columna id de tipo entero y autoicrementable
            $table->id();

            //por defecto crea dos columnas (create_at y update_at)
            //create_at -> hora y fecha de creación
            //update_at -> hora y fecha de actualización
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
