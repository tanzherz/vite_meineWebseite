import { v4 as uuid } from 'uuid'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Hero1Text = ({ tabs, currentItem }) => {
  const { description } = tabs[currentItem]
  return (
    <article className='mt-10 mb-10'>
      {description.map((text) => {
        const id = uuid()
        return (
          <div
            key={id}
            className='grid grid-cols-[15px_minmax(auto,_1fr)] gap-2 items-center  mt-3'
          >
            <FaAngleDoubleRight className='text-secondary' />
            <p>{text}</p>
          </div>
        )
      })}
    </article>
  )
}
export default Hero1Text
