import { useState, useEffect } from 'react'
import { connect, sendMsg } from './api'
import ChatHistory from './components/ChatHistory'
import Header from './components/Header'
import ChatInput from './components/ChatInput'

const App = () => {
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    connect((msg) => {
      console.log('New Message')
      setChatHistory([...chatHistory, msg])
      console.log(chatHistory)
    })
  }, [chatHistory])

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value)
      event.target.value = ''
    }
  }

  return (
    <div className='App'>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  )
}

export default App
