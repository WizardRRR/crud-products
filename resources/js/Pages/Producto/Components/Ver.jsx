import React, { useState } from 'react'
import ResponseModal from './ResponseModal'
import axios from 'axios'
import Swal from 'sweetalert2'
function Ver({ productos }) {

  const [showModal, setShowModal] = useState(false)
  const [producto, setProducto] = useState({});
  console.log(producto)

  const handleEdit = (id) => {
    axios.get(`/productos/${id}`).then((response) => {
      setProducto(response.data);
      setShowModal(true);
    });
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/productos/${id}`).then(() => {
          window.location.reload();
        }).catch((error) => {
          console.log(error);
        });
      }
    });
  }

  return (
    <>
      <div className=' pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5 place-items-center w-max mx-auto'>
        {productos.map((producto, index) => {
          const bgColor = index % 2 === 0 ? 'bg-teal-200 hover:bg-green-200' : 'bg-green-200 hover:bg-teal-200';
          const classes = `flex flex-col p-3 ${bgColor} rounded-md shadow-md hover:scale-105 transition-all cursor-pointer`;
          return (
            <ul className={classes} key={producto.producto_id}>
              <li><b>Nombre: </b>{producto.nombre} { }</li>
              <li><b>Marca:</b> {producto.marca}</li>
              <li><b>Precio:</b> {producto.precio}</li>
              <li><b>Fecha de vencimiento:</b> {producto.fvencimiento}</li>
              <div className='mt-3 flex justify-around'>
                <button onClick={() => handleDelete(producto.producto_id)} className='bg-red-500 p-2 rounded-md text-white hover:bg-red-700'>Eliminar</button>
                <button onClick={() => handleEdit(producto.producto_id)} className='bg-blue-500 rounded-md p-2 text-white hover:bg-blue-700'>Editar</button>
              </div>
            </ul>
          );
        })}

        {/* Modal Global */}
        {
          showModal &&
          <ResponseModal
            show={true}
            setShowModal={setShowModal}
            producto={producto}
          />
        }

      </div>
    </>
  )
}

export default Ver
