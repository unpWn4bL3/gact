import Message from '../Message'
import './ChatHistory.scss'

const ChatHistory = ({ chatHistory }) => {
  const messages = chatHistory.map((msg, idx) => <Message key={idx} message={msg.data} />)
  return (
    <div className='ChatHistory'>
      <h2>ChatHistory</h2>
      {messages}
    </div>
  )
}

export default ChatHistory
