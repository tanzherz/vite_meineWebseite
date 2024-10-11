import { Form } from 'react-router-dom'

import Fragezeichen from '../assets/User/Fragezeichen.jpg'
import { useState } from 'react'

const ProductsQuestion = () => {
  const [name, setName] = useState('')
  const [answer, setAnswer] = useState(false)
  const handleName = (e) => {
    setName(e.target.value)

    setAnswer(false)

    // e.preventDefault()
  }

  const showAnswer = () => {
    if (name === '') return
    if (
      name === 'hm' ||
      name === 'h&m' ||
      name === 'Hm' ||
      name === 'HM' ||
      name === 'H&M'
    )
      return `H&M ist richtig`
    return `Nope, Versuchs noch einmal`
  }

  console.log(name)

  return (
    <section className='grid place-items-center mt-10 '>
      <Form className='flex flex-col flex-wrap place-items-center w-96 md:w-[30rem] p-8 bg-base-100 shadow-lg '>
        <h1 className='text-lg sm:text-xl  tracking-normal '>
          Welche Marke ist hinter folgendem User versteckt? Ohne nachzugucken!
        </h1>
        <figure className='flex justify-center mb-2'>
          <img
            src={Fragezeichen}
            alt=''
            className=' w-12 h-12 rounded-full object-cover mr-2 '
          />
        </figure>
        <div className='form-control w-full max-w-[30rem] '>
          <input
            type='text'
            name='name'
            value={name}
            placeholder='Type here'
            className='input input-bordered text-center mb-2'
            onChange={handleName}
          />
        </div>
        <div className='w-full max-w-[30rem]'>
          <button
            className='btn btn-primary btn-block'
            onClick={() => setAnswer(true)}
          >
            Antwort
          </button>
          {answer && (
            <div className='text-lg md:text-xl text-center mt-2 mb-10'>
              {showAnswer()}
            </div>
          )}
        </div>
      </Form>
    </section>
  )
}
export default ProductsQuestion
