import { carousel } from './data'

const Carousel = () => {
  return (
    <div className='h-[24rem] carousel carousel-center p-4 space-x-4 bg-primary rounded-box mt-8 mb-12'>
      {carousel.map((bild) => {
        return (
          <div key={bild} className='carousel-item'>
            <img
              src={bild}
              alt=''
              className='rounded-box h-full w-80 object-cover'
            />
          </div>
        )
      })}
    </div>
  )
}
export default Carousel
