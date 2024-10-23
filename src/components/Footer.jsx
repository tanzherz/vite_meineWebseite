import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-screen bg-primary text-primary  mt-20'>
      <div className='align-element flex flex-wrap align-middle justify-between py-2 px-2'>
        <div className='mr-6'></div>

        <div className='flex align-middle '>
          <button
            className='btn btn-primary'
            onClick={() => window.scrollTo(0, 0)}
          >
            nach oben
          </button>
        </div>
        <div></div>
      </div>
    </footer>
  )
}
export default Footer
