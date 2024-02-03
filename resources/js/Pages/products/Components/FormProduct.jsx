import { useState } from 'react'
import { toast } from 'sonner'
import axios from 'axios'

import CustomInput from '@/Components/CustomInput'
import Spinner from '@/Components/Spinner'

const modelProduct = {
  name: '',
  brand: '',
  price: '',
  expiration_date: ''
}

const initialFormData = (product) => product ? product : modelProduct

export default function FormProduct({ onClose, fetchProducts, product, edit }) {

  const [errors, setErrors] = useState(modelProduct)
  const [data, setData] = useState(initialFormData(product))
  const [isLoading, setIsLoading] = useState(false)

  const storeProduct = () => {
    axios.post(route('product.store'), data)
      .then((res) => {
        toast.success(res.data.message)
        fetchProducts()
        onClose()
      })
      .catch((err) => {
        console.log(err)
        setErrors(err.response.data.errors)
      })
      .finally(() => setIsLoading(false))
  }

  const editProduct = () => {
    axios.put(route('product.update', product.id), data)
      .then((res) => {
        toast.success(res.data.message)
        fetchProducts()
        onClose()
      })
      .catch((err) => {
        console.log(err)
        setErrors(err.response.data.errors)
      })
      .finally(() => setIsLoading(false))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    if (edit) editProduct()
    else storeProduct()
  }

  const handleChange = (name, e) => setData({ ...data, [name]: e.target.value })

  return (
    <div className='p-5'>

      <form onSubmit={handleSubmit} >
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
          <CustomInput
            label='Nombre'
            value={data.name}
            onChange={e => handleChange('name', e)}
            error={errors.name}
          />
          <CustomInput
            label='Marca'
            value={data.brand}
            onChange={e => handleChange('brand', e)}
            error={errors.brand}
          />
          <CustomInput
            label='Precio'
            value={data.price}
            onChange={e => handleChange('price', e)}
            error={errors.price}
          />
          <CustomInput
            label='Fecha de vencimiento'
            value={data.expiration_date}
            type='date'
            onChange={e => handleChange('expiration_date', e)}
            error={errors.expiration_date}
          />
        </div>
        <div className='flex w-full gap-4 mt-5'>
          <button
            type='button'
            className='px-4 py-2 w-full bg-white border-2 border-stone-600 rounded
            hover:bg-slate-50 hover:font-semibold transition-[background]'
            onClick={() => onClose()}
          >
            Atras
          </button>
          <button
            type='submit'
            className='px-4 py-2 w-full bg-stone-950 text-white border-2 border-black rounded
            hover:bg-stone-800 transition-all hover:font-semibold flex items-center justify-center gap-3'
          >
            {isLoading && <Spinner />}
            {isLoading ? 'Guardando...' : 'Guardar'}
          </button>
        </div>
      </form>
    </div>
  )
}
