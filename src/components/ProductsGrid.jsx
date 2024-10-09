import { data } from './data'
import Siegel from './Siegel'
const ProductsGrid = () => {
  return (
    <div className='pt-12 flex w-full overflow-auto place-items-center min-h-[100vh] border-2'>
      {data.map((dataItem) => {
        const { id, text, mode, bild, siegel, image, title } = dataItem
        return (
          <article
            key={id}
            className='card card-compact min-w-96 shadow-lg hover:shadow-stone-500 transition duration-300 bg-primary  rounded-xl mx-1'
          >
            <figure className='relative'>
              <img
                src={bild}
                alt={mode}
                className='rounded-xl h-[30rem] m:h-80 w-full object-cover relative'
              />
              <Siegel siegel={siegel} />
            </figure>
            <div className='card-body'>
              <div className='ml-2 mb-3 flex'>
                <img
                  src={image}
                  alt={mode}
                  className='w-12 h-12 rounded-full object-cover mr-2'
                />
                <h2 className='card-title capitalize tracking-wider text-base-300 text-base md:text-lg '>
                  {mode}
                </h2>
              </div>
              <h3 className='text-base md:text-lg text-secondary invert pl-4 tracking-wide font-semibold capitalize  '>
                {title}
              </h3>
              <p className='text-base md:text-lg text-base-300 pl-4 pr-3'>
                {text}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}
export default ProductsGrid
