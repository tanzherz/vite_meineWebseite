import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import SectionTitle from './SectionTitle.jsx'

import { siegel as carousel } from './data'
import Hero3Question3 from './Hero3Question3.jsx'

export const action = async ({ request }) => {
  // Verarbeite die Formulardaten
  const formData = await request.formData()
  const formValues = Object.fromEntries(formData)
  console.log('Form Data2:', formValues) // Zeige die Formulardaten in der Konsole an

  let message = ''
  if (formValues.siegel.includes('GruenerKnopf')) {
    message =
      'Korrekt! der Grüne Knopf wurde am 9. September 2019 eingeführt und später nachgebessert, deswegen spricht man auch vom Grünen Knopf 2.0. Dieser trat am am 1. August 2022 in Kraft. Bereits zertifizierte Unternehmen hatten bis zum 31.07.2023 Zeit, ein Rezertifizierungsaudit nach dem Grünen Knopf 2.0 zu absolvieren. Nach Abfaluf dieser Frist müssen alle Unternehmen, die dazu kommen wollen/müssen die Anforderungen des Grünen Knopfes 2.0 erfüllen. '
  } else {
    message = 'Nope!'
  }
  return { message }
}

const Hero3 = () => {
  return (
    <>
      <SectionTitle text='Regulierung' />
      <div className=' mt-10  '>
        <h1 className='text-lg md:text-xl leading-8 tracking-normal mt-4 px-4'>
          Ich stelle 6 Nachhaltigkeitssiegel vor. Schau Dir diese an, kennst Du
          vieleicht Einige davon?
        </h1>

        <Carousel carousel={carousel} param='bg-primary' />

        <Hero3Question3 />
        {/* <SectionTitle text='Potentielle Produktpallette' /> */}
        {/* <div className='mt-5 mb-20 text-center '>
          <Link to='/products/:id' className='btn btn-primary'>
            {' '}
            Potentielle Produktpallette
          </Link>
        </div> */}
      </div>
    </>
  )
}
export default Hero3
