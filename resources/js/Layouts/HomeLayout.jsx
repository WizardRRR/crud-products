import { Link, usePage } from '@inertiajs/react'

const LinkNav = ({ children, href, ...props }) => {
  const pathname = window.location.pathname
  return (
    <Link
      href={href}
      {...props}
      className={`p-3 hover:bg-blue-500 text-white font-bold hover:scale-110 hover:underline
      ${(pathname === href) ? 'underline' : ''}
      transition-all duration-300`}
    >
      {children}
    </Link>
  )
}

export default function HomeLayout({ children }) {
  const auth = usePage().props.auth
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='flex bg-blue-900 p-2 justify-around items-center'>
          <LinkNav href='/'>CRUD - PRODUCTOS</LinkNav>
        </div>
        <main className='flex flex-col flex-grow lg:mx-[100px]'>
          {children}
        </main>
      </div>
    </>
  )
}
