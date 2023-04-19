import HomeLayout from '@/Layouts/HomeLayout'
import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react'

function Index(props) {
  console.log(props);
  return (
    <>
      <HomeLayout>
        <div className='flex-grow'>
          <div className='p-4'>
            <h2 className='text-4xl text-center font-extrabold text-gray-900'>Index - Productos</h2>
            <p className='text-center'>Royer Rutti - 15</p>
          </div>
          <div className='flex p-2 justify-center gap-2 mb-7'>
            <Link href={route('productos.create')} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Añadir Producto
            </Link>
            <Link class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Eliminar Producto
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 place-items-center w-max mx-auto'>
            {props.productos.map((producto, index) => {
              const bgColor = index % 2 === 0 ? 'bg-teal-200 hover:bg-green-200' : 'bg-green-200 hover:bg-teal-200';
              const classes = `flex flex-col p-3 ${bgColor} rounded-md shadow-md hover:scale-105 transition-all cursor-pointer`;

              return (
                <ul className={classes} key={producto.id}>
                  <li><b>Nombre: </b>{producto.nombre}</li>
                  <li><b>Marca:</b> {producto.nombre}</li>
                  <li><b>Precio:</b> {producto.precio}</li>
                  <li><b>Fecha de vencimiento:</b> {producto.fvencimiento}</li>
                  <div className='mt-3 flex justify-around'>
                    <Link className='bg-red-500 p-2 rounded-md text-white hover:bg-red-700'>Eliminar</Link>
                    <Link className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-700'>Editar</Link>
                  </div>
                </ul>
              );
            })}
          </div>
        </div>
      </HomeLayout>
    </>
  )
}

export default Index
