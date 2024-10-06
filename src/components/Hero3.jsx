import Carousel2 from './Carousel2.jsx'
import { Link } from 'react-router-dom'

const Hero3 = () => {
  return (
    <>
      <div className='grid lg:grid-cols-2 gap-12 items-center mt-20'>
        <div>
          <div className='fle '>
            <h1 className='max-w-2xl text-xl font-semibold leading-none tracking-tight sm:text-2xl'>
              Ich stelle
              <div className='stats bg-primary shadow mx-2'>
                <div className='stat'>
                  <div className='stat-title text-primary-content text-2xl font-bold '>
                    7
                  </div>
                </div>
              </div>
              Nachhaltigkeitssiegel. <span> </span> Was meinst Du welcher Siegel
              ist definitiv überflüßig?
            </h1>
          </div>
        </div>
        <Carousel2 />
        <div className='mt-10'>
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
