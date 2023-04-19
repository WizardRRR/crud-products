import HomeLayout from '@/Layouts/HomeLayout';
import { Link } from '@inertiajs/react';
import React from 'react';

function About(props) {
  return (
    <>
      <HomeLayout>
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Nosotros</h1>
          <p className="mb-4">Somos una empresa comprometida con nuestros clientes y nuestro objetivo es ofrecer siempre el mejor servicio posible.</p>
          <p className="mb-4">Nuestro equipo está conformado por expertos en diversas áreas, lo que nos permite abordar proyectos complejos y brindar soluciones innovadoras.</p>
          <p className="mb-4">Si necesitas más información sobre nosotros o nuestros servicios, no dudes en contactarnos.</p>
          <Link as='button' href={route('contact')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Contactanos
          </Link>
        </div>
      </HomeLayout>
    </>
  );
}

export default About;
