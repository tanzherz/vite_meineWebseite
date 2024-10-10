import Standard from '../assets/Hallo_grün.jpg'

const About = () => {
  return (
    <>
      <figure className='grid place-items-center mt-5'>
        <img src={Standard} className='w-72 object-contain' />
      </figure>
      <div className='flex flex-wrap gap-2 mt-10 sm:gap-x-6 items-center justify-center'>
        <h1 className='text-3xl font-bold leading-none tracking-tight'>
          Wir lieben
        </h1>
        <div className='stats bg-primary shadow'>
          <div className='stat'>
            <div className='stat-title text-primary-content text-xl font-bold tracking-widest'>
              Mode
            </div>
          </div>
        </div>
      </div>
      <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, maiores
        dicta eius eveniet sint dolor quas earum reprehenderit, est cumque
        voluptatibus at quod illum laborum possimus accusantium voluptate iste
        velit sed consequuntur. Commodi magni earum omnis perspiciatis velit
        provident dolorem?
      </p>
    </>
  )
}
export default About
