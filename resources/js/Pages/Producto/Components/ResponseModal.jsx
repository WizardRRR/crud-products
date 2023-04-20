import React from 'react'
import Modal from './../../../Components/Modal'
import { Link, useForm } from '@inertiajs/react'

function ResponseModal({ show, setShowModal, producto }) {

  const { data, setData, put, processing, errors } = useForm({
    nombre: producto.nombre,
    marca: producto.marca,
    precio: producto.precio,
    fvencimiento: producto.fvencimiento
  })
  console.log(data);

  const handleSubmit = (id) => {
    put(`/productos/${id}`);
    setShowModal(false)
  }

  return (
    <Modal show={true}>
      <div className='bg-gray-100 rounded-md p-4 w-[400px] mx-auto'>
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
          <button onClick={() => { setShowModal(false) }} className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600">
            Cancelar
          </button>
          <button onClick={() => handleSubmit(producto.producto_id)} className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            {processing ? 'Actualizando...' : 'Editar'}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ResponseModal
