const Hero1BtnContainer = ({ tabs, currentItem, setCurrentItem }) => {
  return (
    <section className='flex justify-center gap-2 mt-10'>
      {tabs.map((tab, index) => {
        return (
          <button
            type='button'
            key={tab.id}
            onClick={() => setCurrentItem(index)}
            className={
              index === currentItem ? 'btn btn-secondary' : 'btn btn-primary'
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
