import './ChatInput.scss'

const ChatInput = ({ send }) => {
  return (
    <div className='ChatInput'>
      <input onKeyDown={send} placeholder='Type your message here, Enter to send...' />
    </div>
  )
}

export default ChatInput
