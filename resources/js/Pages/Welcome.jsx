import HomeLayout from '@/Layouts/HomeLayout'
import { Head } from '@inertiajs/react'

export default function Welcome(props) {
  console.log(props);
  return (
    <>
      <Head title='Welcome' />
      <HomeLayout>
        <p>Bienvenido al welcome de mi web¡</p>
      </HomeLayout>
    </>
  )
}
