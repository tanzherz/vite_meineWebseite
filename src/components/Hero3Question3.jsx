import { Form, useActionData } from 'react-router-dom'

import { siegel } from './data'
import { useState, useEffect } from 'react'

const Hero3Question3 = () => {
  const actionData = useActionData()
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (actionData?.message) {
      setMessage(actionData.message)
    }
  }, [actionData])

  const handleInputChange = () => {
    setMessage()
  }

  return (
    <section>
      <Form
        method='POST'
        className='grid place-items-center gap-y-5 shadow-md rounded-lg'
      >
        <h1 className='text-center font-semibold text-lg md:text-xl leading-8 tracking-normal'>
          {' '}
          Welches Siegel ist ein staatlich anerkanntes Siegel?
        </h1>
        <div className='flex flex-wrap '>
          {siegel.map((item) => {
            const splitItem = item.split('/')
            const lastItem = splitItem[splitItem.length - 1]
            return (
              <section
                key={item}
                className='grid place-items-center gap-y-2 mx-4'
              >
                <label htmlFor=''>
                  <img
                    src={item}
                    className='w-16 h-16 border-4 border-primary rounded-lg'
                  />
                </label>

                <input
                  type='radio'
                  name='siegel'
                  value={lastItem}
                  className='radio radio-primary'
                  onChange={handleInputChange}
                />
              </section>
            )
          })}
        </div>
        <button type='submit' className='btn btn-primary btn-md mb-8'>
          Antwort senden
        </button>
      </Form>
      {message && (
        <p className='grid place-items-center text-lg md:text-xl leading- tracking-normal  mt-4 px-4'>
          {message}
        </p>
      )}
    </section>
  )
}
export default Hero3Question3
