import { data } from './data'
const ProductsGrid = () => {
  console.log(data)

  return (
    <div className='pt-12 grid gap md:grid-cols-2 lg:grid-cols-3'>
      {data.map((dataItem) => {
        const { id, text, mode, bild, siegel } = dataItem
        return (
          <figure key={id} className='px-4 pt-4'>
            <img
              src={bild}
              alt={mode}
              className='rounded-xl h-96 m:h-80 w-full object-cover'
            />
          </figure>
        )
      })}
      ProductsGrid
    </div>
  )
}
export default ProductsGrid
