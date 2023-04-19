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
        Schema::create('clientes', function (Blueprint $table) {
            $table->id('cliente_id');
            $table->string('nombre',50);
            $table->string('apellido',50);
            $table->enum('sexo',["M","F"]);
            $table->string('email',100)->unique();
            $table->date('fnacimiento')->nullable();
            $table->text('direccion')->nullable();
            $table->integer('puntos');
            $table->double('saldo');
            $table->boolean('estado')->default((1));
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clientes');
    }
};
