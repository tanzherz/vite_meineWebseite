const Hero1BtnContainer = ({ tabs, currentItem, setCurrentItem }) => {
  return (
    <section className='flex flex-wrap justify-center sm:justify-start gap-2 mt-10'>
      {tabs.map((tab, index) => {
        return (
          <button
            type='button'
            key={tab.id}
            onClick={() => setCurrentItem(index)}
            className={
              index === currentItem
                ? 'btn btn-secondary capitalize text-lg md:text-xl'
                : 'btn btn-primary capitalize text-lg md:text-xl'
            }
          >
            {tab.tab}
          </button>
        )
      })}
    </section>
  )
}
export default Hero1BtnContainer
