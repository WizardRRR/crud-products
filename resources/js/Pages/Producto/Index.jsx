import HomeLayout from '@/Layouts/HomeLayout';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react'
import Ver from './Components/Ver';
import Crear from './Components/Crear'

function Index(props) {
  const [modulo, setModulo] = useState('ver');
  console.log(modulo)
  const handleClick = (name) => {
    setModulo(name);
  }

  return (
    <>
      <HomeLayout>
        <div className='flex-grow'>
          <div className='p-4'>
            <h2 className='text-4xl text-center font-extrabold text-gray-900'>Index - Productos</h2>
            <p className='text-center'>Royer Rutti - 15</p>
          </div>
          <div className='flex p-2 justify-center gap-2 mb-7'>
            <button onClick={() => handleClick('ver')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Ver Productos
            </button>
            <button onClick={() => handleClick('añadir')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Añadir Producto
            </button>
          </div>
          {
            modulo === 'ver' && (
              <Ver productos={props.productos} />
            )
          }
          {
            modulo === 'añadir' && (
              <Crear setModulo={setModulo} />
            )
          }
        </div>
      </HomeLayout>
    </>
  )
}

export default Index
