const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <div className='form-control'>
      <label className='input input-bordered flex items-center gap-2'>
        {label}
        <input
          type={type}
          name={name}
          className='grow'
          defaultValue={defaultValue}
        />
      </label>
    </div>
  )
}
export default FormInput
