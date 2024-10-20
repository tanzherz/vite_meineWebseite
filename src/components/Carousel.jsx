const Carousel = ({ carousel, param }) => {
  return (
    <div
      className={`h-[26rem] carousel carousel-center p-4 space-x-4 ${param} rounded-box mt-8 mb-12 w-full`}
    >
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
