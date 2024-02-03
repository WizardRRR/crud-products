import { useEffect, useState } from 'react'

// import HomeLayout from '@/Layouts/HomeLayout'
import ProductItem from './Components/ProductItem'
import FormProduct from './Components/FormProduct'
import Modal from '@/Components/Modal'

import { Head } from '@inertiajs/react'
import { toast } from 'sonner'
import axios from 'axios'

import { IoMdAddCircleOutline } from 'react-icons/io'

export default function Products() {

  const [showForm, setShowForm] = useState(false)
  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [tmpProductEdit, setTmpProductEdit] = useState('')

  const fetchProducts = () => {
    axios.get(route('product.getAll'))
      .then((res) => {
        setProductsData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const deleteProduct = (id) => {
    axios.delete(route('product.destroy', id))
      .then((res) => {
        toast.success(res.data.message)
        fetchProducts()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const editProduct = (id) => {
    axios.get(route('product.show', id))
      .then((res) => {
        setShowForm(true)
        setTmpProductEdit(res.data)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }
  const closeForm = () => {
    setShowForm(false)
    setTmpProductEdit('')
  }

  useEffect(() => {
    setIsLoading(true)
    fetchProducts()
  }, [])

  return (
    // <HomeLayout>
    <div>
      <Head title='Productos' />
      <div className='min-h-screen bg-slate-50 py-10 px-5'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl font-black text-stone-950 drop-shadow mb-2'>
            Productos
          </h2>
          <p className='text-stone-800 text-start text-sm md:text-base md:text-center'>
            modulo para gestionar los productos de la empresa
          </p>
        </div>
        <div className='flex md:mx-20 mb-5'>
          <button
            onClick={() => setShowForm(true)}
            aria-label='añadir producto'
            className='flex items-center gap-2 bg-stone-950 hover:bg-stone-800 text-white
            font-semibold py-2 px-4 rounded shadow-sm shadow-stone-700 transition-all duration-300 hover:scale-105'
          >
            <IoMdAddCircleOutline size={20} />
            Producto
          </button>
        </div>
        <Modal show={showForm} onClose={closeForm}>
          <FormProduct
            onClose={closeForm}
            fetchProducts={fetchProducts}
            product={tmpProductEdit}
            edit={tmpProductEdit}
          />
        </Modal>

        {!isLoading &&
          <div className='flex gap-10 flex-wrap md:mx-10 justify-center'
          >
            {productsData.map((product, index) =>
              <ProductItem
                key={index}
                product={product}
                handleDelete={deleteProduct}
                handleEdit={editProduct}
              />
            )}
          </div>
        }

        {isLoading &&
          <p className='font-semibold text-center mt-10 animate-pulse'>
            Cargando productos...
          </p>
        }
      </div>
    </div>
  )
  {/* </HomeLayout> */ }
}
