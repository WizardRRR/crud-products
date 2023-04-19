import React from 'react';
import HomeLayout from './../../Layouts/HomeLayout'

function Contact(props) {
  return (
    <>
      <HomeLayout>
        <div className="container mx-auto py-8">
          <h2 className="text-3xl font-semibold mb-4">Contáctanos</h2>
          <form>
            <div className="flex flex-wrap mb-4">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label htmlFor="nombre" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input type="text" id="nombre" name="nombre" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="mensaje" className="block text-gray-700 font-medium mb-2">Mensaje</label>
              <textarea id="mensaje" name="mensaje" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
          </form>
        </div>
      </HomeLayout>
    </>
  )
}

export default Contact;
