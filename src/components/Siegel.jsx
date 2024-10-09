const Siegel = ({ siegel }) => {
  console.log(siegel)

  return (
    <div className='flex absolute bottom-3 left-5 '>
      {siegel.map((siegel, index) => {
        return (
          <section key={index} className='mr-2 hover:filter-none'>
            <img
              src={siegel}
              className=' max-w-20 h-12 object-contain rounded-xl grayscale invert hover:filter-none  bg-primary'
            />{' '}
            {/* <div className='absolute z-1 bg-primary w-18 h-12 '></div> */}
          </section>
        )
      })}
    </div>
  )
}
export default Siegel
