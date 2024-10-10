import Carousel2 from './Carousel2.jsx'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle.jsx'
import { Hero3Queation3 } from './Hero3Queation3.jsx'

const Hero3 = () => {
  return (
    <>
      <SectionTitle text='Regulierung' />
      <div className='grid gap-12 items-center mt-10 border-2 border-secondary'>
        <div>
          <div className='flex '>
            <h1 className='text-lg sm:text-xl  tracking-normal '>
              Ich stelle 7 Nachhaltigkeitssiegel vor. Was meinst Du, welcher
              Siegel ist doppelt gemoppelt und kann somit raus? Man muss genau
              ziemlich hinschauen!
            </h1>
          </div>
        </div>
        <Carousel2 />
        <h2 className='text-xl sm:text-2xl tracking-normal text-center'>
          Hier noch mal alle Siegel im Überblick
        </h2>
        <Hero3Queation3 />
        <SectionTitle text='Potentielle Produktpallette' />
        <div className='mt-5 mb-20 text-center '>
          <Link to='/products/:id' className='btn btn-primary'>
            {' '}
            Potentielle Produktpallette
          </Link>
        </div>
      </div>
    </>
  )
}
export default Hero3
