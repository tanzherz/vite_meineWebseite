import { Form } from 'react-router-dom'
import { useState } from 'react'
import { siegel as siegelItems } from './data'

export const Hero3Queation3 = () => {
  const [siegel, setSiegel] = useState('')
  const [answer, setAnswer] = useState(false)

  const handleChange = (e) => {
    setSiegel(e.target.value)
    setAnswer(false)
    // console.log(siegel)
  }

  const showAnswer = () => {
    console.log('antwort')

    if (siegel === '4')
      return `Das ist richtig. Den Grüner Konpf 2.0 ist eine verbesserte Version vom Grünen Knopf 1.0!`
    else {
      return `Versuchs noch einmal`
    }
  }

  return (
    <section className='grid items-centee  '>
      <div className='flex flex-wrap  place-content-center   '>
        {siegelItems.map((item, index) => {
          return (
            <figure
              key={item}
              className='flex flex-col px-4 py-4 place-items-center'
            >
              <img src={item} className='w-10 h-10 sm:w-16 sm:h-16' />
              <p>{index}</p>
            </figure>
          )
        })}
      </div>
      <Form className='flex flex-col flex-wrap items-center w-96 md:w-[30rem] p-8 mt-4 mb-12 bg-base-100 shadow-lg '>
        <h1 className='text-lg sm:text-xl tracking-normal mb-4'>
          Wähle die passende Zahl, die rausfliegen soll!
        </h1>

        <div className='form-control w-full max-w-[30rem] '>
          <input
            type='text'
            name='siegel'
            value={siegel}
            placeholder='Type here'
            className='input input-bordered text-center mb-2'
            onChange={handleChange}
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
            <div className='text-lg md:text-xl text-center mt-2'>
              {showAnswer()}
            </div>
          )}
        </div>
      </Form>
    </section>
  )
}
