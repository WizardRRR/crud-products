export default function CustomInput({
  classNameContainer,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error
}) {
  return (
    <div className={classNameContainer}>
      <label
        htmlFor={label}
        className='block text-stone-950 font-semibold mb-1'>
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='w-full px-4 py-2 rounded-md border-gray-300 focus:border-black focus:outline-none focus:ring-0'
      />
      {error && <p className='text-red-500 font-medium text-xs mt-0.5'>{error}</p>}
    </div>
  )
}
