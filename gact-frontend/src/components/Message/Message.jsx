import './Message.scss'

const Message = ({ message }) => {
  const m = JSON.parse(message)
  return (
    <p className='Message'>{m.body}</p>
  )
}

export default Message
