import { Link, usePage } from '@inertiajs/react'
import React from 'react'

const LinkNav = ({ children, href, ...props }) => {
  const pathname = window.location.pathname;
  return (
    <Link href={href} {...props} className={`p-3 hover:bg-blue-500 text-white font-bold hover:scale-110 hover:underline ${(pathname === href) ? 'underline' : ''} transition-all duration-300`}>
      {children}
    </Link>
  )
}

function HomeLayout({ children }) {
  const auth = usePage().props.auth;
  console.log({ auth })

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <div className='flex bg-blue-900 p-2 justify-around items-center'>
          <LinkNav href='/'>Home</LinkNav>
          <LinkNav href='/sobre-nosotros' >Sobre Nosotros</LinkNav>
          <LinkNav href='/contactanos'>Contactanos</LinkNav>
          <LinkNav href='/productos'>Productos</LinkNav>
          {auth.user ? (
            <LinkNav
              href={route('dashboard')}
            >
              Dashboard
            </LinkNav>
          ) : (
            <>
              <LinkNav
                href='/login'
              >
                Log in
              </LinkNav>

              <LinkNav
                href='/register'
              >
                Register
              </LinkNav>
            </>
          )}
        </div>
        <main className='flex flex-col flex-grow lg:mx-[100px]'>
          {children}
        </main>
      </div>
    </>
  )
}

export default HomeLayout
