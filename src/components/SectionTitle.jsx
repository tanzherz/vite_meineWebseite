const SectionTitle = ({ text }) => {
  return (
    <>
      <div className='border-b-4 border-primary w-full mb-4 '>
        <h2 className='font-bold  btn-ghost cursor-none text-xl md:text-2xl tracking-wider '>
          {text}
        </h2>
      </div>
    </>
  )
}
export default SectionTitle
