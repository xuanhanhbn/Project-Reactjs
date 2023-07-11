import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io()

function Chat() {
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    socket.on('message', data => {
      setMessages(prevMessages => [...prevMessages, data])
    })

    return () => {
      socket.off('message')
    }
  }, [])

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      socket.emit('message', inputValue)
      setInputValue('')
    }
  }

  return (
    <div>
      <h1>Chat Box</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type='text' value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  )
}

export default Chat
