import Carousel from './Carousel.jsx'
import SectionTitle from './SectionTitle.jsx'
import { carousel } from './data'

const Hero2 = () => {
  return (
    <>
      <SectionTitle text='KI' />
      <div className='align-element block  items-center   '>
        <h1 className='text-lg md:text-xl leading-8 tracking-normal mt-4 px-4'>
          Generierte Bilder der KI basierend auf dem Text des Menschen: komplexe
          vs. minimalistische Designs:
        </h1>

        <div className='grid grid-cols-2 mt-4'>
          <div className='chat chat-start gap-2'>
            <div className='chat-bubble bg-primary text-base-200 md:text-lg'>
              Eine detaillierte Vektorillustration einer Katze, <br />
              feine Linien, dramatisches Licht, <br />
              symmetrisch, hyperrealistisch
            </div>
            <div className='chat-bubble bg-primary text-base-200 md:text-lg'>
              Eine Katze auf dem Fahrrad, Vektorillustration
            </div>
          </div>
          <div className='chat chat-end gap-2'>
            <div className='chat-bubble bg-primary text-base-200 md:text-lg'>
              Ich liebe einfach den Sommer, Logo-Stil
            </div>
            <div className='chat-bubble bg-primary text-base-200 md:text-lg'>
              Freitag um 8:45, Logo-Stil
            </div>
            <div className='chat-bubble bg-primary text-base-200 md:text-lg'>
              Äpfel seit 1999, Logo-Stil
            </div>
          </div>
        </div>

        <Carousel carousel={carousel} param='bg-primary' />
      </div>
    </>
  )
}
export default Hero2
