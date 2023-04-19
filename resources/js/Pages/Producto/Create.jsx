import HomeLayout from '@/Layouts/HomeLayout'
import { Link, useForm } from '@inertiajs/react'
import React from 'react'

function Create() {
  const { data, setData, post, processing,errors } = useForm({
    nombre: '',
    marca: '',
    precio: '',
    fvencimiento: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    post(route('productos.store'))
  }


  return (
    <>
      <HomeLayout>
        <div className='p-3 text-center'>
          <h2 className="text-3xl font-bold">Añadir Producto</h2>
          <p className="mt-2 mb-4">Rellena el siguiente formulario para añadir un nuevo producto:</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-100 rounded-md p-4">
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">Nombre</label>
            <input id="nombre" type="text" value={data.nombre} onChange={e => setData('nombre', e.target.value)} placeholder="Introduce el nombre del producto" className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-400 focus:outline-none" />
            {
              errors.nombre && <p className='text-red-500 text-sm animate-pulse mt-1'>{errors.nombre}</p>
            }
          </div>
          <div className="mb-4">
            <label htmlFor="marca" className="block text-gray-700 font-bold mb-2">Marca</label>
            <input id="marca" type="text" value={data.marca} onChange={e => setData('marca', e.target.value)} placeholder="Introduce la marca del producto" className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-400 focus:outline-none" />
            {
              errors.marca && <p className='text-red-500 text-sm animate-pulse mt-1'>{errors.nombre}</p>
            }
          </div>
          <div className="mb-4">
            <label htmlFor="precio" className="block text-gray-700 font-bold mb-2">Precio</label>
            <input id="precio" type="number" value={data.precio} onChange={e => setData('precio', e.target.value)} placeholder="Introduce el precio del producto" className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-400 focus:outline-none" />
            {
              errors.precio && <p className='text-red-500 text-sm animate-pulse mt-1'>{errors.nombre}</p>
            }
          </div>
          <div className="mb-4">
            <label htmlFor="fvencimiento" className="block text-gray-700 font-bold mb-2">Fecha de vencimiento</label>
            <input id="fvencimiento" type="date" value={data.fvencimiento} onChange={e => setData('fvencimiento', e.target.value)} placeholder="Introduce la fecha de vencimiento del producto" className="w-full px-4 py-2 rounded-md border-gray-300 focus:border-blue-400 focus:outline-none" />
            {
              errors.fvencimiento && <p className='text-red-500 text-sm animate-pulse mt-1'>{errors.fvencimiento}</p>
            }
          </div>
          <div className='flex w-full justify-center gap-4'>
            <Link href={route('productos.index')} type="submit" className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
              Ir a Productos
            </Link>
            <button type="submit" disabled={processing} className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              {processing ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </HomeLayout>
    </>
  )
}

export default Create
