import Carousel2 from './Carousel2.jsx'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle.jsx'

const Hero3 = () => {
  return (
    <>
      <SectionTitle text='Regulierung' />
      <div className='grid gap-12 items-center mt-10'>
        <div>
          <div className='flex '>
            <h1 className='text-lg sm:text-xl  tracking-normal '>
              Ich stelle 7 Nachhaltigkeitssiegel vor. Was meinst Du welcher
              Siegel definitiv überflüßig ist?
            </h1>
          </div>
        </div>
        <Carousel2 />
        <div className='mt-8'>
          <Link to='/products:id' className='btn btn-primary'>
            {' '}
            Potentielle Produktpallette
          </Link>
        </div>
      </div>
    </>
  )
}
export default Hero3
