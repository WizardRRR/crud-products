import { MdOutlineModeEdit } from 'react-icons/md'
import { IoMdTrash } from 'react-icons/io'

export default function ProductItem({ product, handleDelete, handleEdit }) {
  const { name, brand, price, id, expiration_date } = product

  const textStyles = 'text-stone-700 font-normal text-base'

  return (
    <ul className='flex flex-col gap-3 p-5 bg-white rounded-md shadow-lg shadow-stone-200
    hover:scale-[1.01] transition-all w-[310px]'
    >
      <p className='font-bold p-1.5 bg-stone-800 rounded-md text-slate-50 w-fit'>{name}</p>
      <div className='font-semibold text-stone-950 text-xs grid grid-cols-2 gap-x-5'>
        <div>
          <p>Marca</p>
          <p className={textStyles}>{brand}</p>
        </div>
        <div>
          <p>Precio</p>
          <p className={textStyles}>S/{price}</p>
        </div>
        <div>
          <p>Fecha de vencimiento</p>
          <p className={textStyles}>{expiration_date}</p>
        </div>
      </div>

      <div className='flex gap-3 justify-end'>
        <button
          onClick={() => handleDelete(id)}
          className='bg-stone-950 w-9 h-9 rounded-md flex text-white justify-center items-center
          shadow-sm transition-all hover:scale-105'
        >
          <IoMdTrash size={18} />
        </button>
        <button
          onClick={() => handleEdit(id)}
          className='bg-slate-200 w-9 h-9 rounded-md text-stone-950 flex justify-center items-center
          shadow-sm transition-all hover:scale-105'
        >
          <MdOutlineModeEdit size={18} />
        </button>
      </div>
    </ul>
  )
}
