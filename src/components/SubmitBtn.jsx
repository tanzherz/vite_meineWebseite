import { useNavigation } from 'react-router-dom'

const SubmitBtn = ({ text, handleLogin }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <button
      type='submit'
      className='btn btn-primary btn-block'
      disabled={isSubmitting}
      onClick={handleLogin}
    >
      {isSubmitting ? (
        <span className='loading loading-spiner'>sending...</span>
      ) : (
        text || 'submit'
      )}
    </button>
  )
}
export default SubmitBtn
