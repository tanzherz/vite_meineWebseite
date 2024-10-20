import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle.jsx'
import { Hero3Queation3 } from './Hero3Queation3.jsx'
import { siegel as carousel } from './data'

const Hero3 = () => {
  return (
    <>
      <SectionTitle text='Regulierung' />
      <div className=' mt-10  border-2 border-green-600'>
        <h1 className='text-lg md:text-xl leading-8 tracking-normal mt-4 px-4'>
          Ich stelle 7 Nachhaltigkeitssiegel vor. Was meinst Du, welcher Siegel
          ist doppelt gemoppelt und kann somit raus? Man muss genau ziemlich
          hinschauen!
        </h1>

        <Carousel carousel={carousel} param='bg-primary' />
        <h2 className='text-xl sm:text-2xl tracking-normal text-center'>
          Hier noch mal alle Siegel im Überblick
        </h2>
        {/* <Hero3Queation3 /> */}
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
