import Carousel from './Carousel.jsx'
import SectionTitle from './SectionTitle.jsx'

const Hero2 = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text='KI und Regulierung' />
      <div className='grid'>
        <h1 className='text-base font-bold leading-8 tracking-tight mt-8'>
          Generierte Bilder der KI basierend auf dem Text des Menschen: komplexe
          vs. minimalistische Designs:
        </h1>
        <Carousel />
      </div>
    </div>
  )
}
export default Hero2
