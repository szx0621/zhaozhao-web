import { useState } from 'react'

export default function App() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '你好，我是昭昭。今天想聊点什么？' }
  ])
  const [input, setInput] = useState('')

  function send() {
    if (!input.trim()) return
    setMessages([...messages, { role: 'user', content: input }])
    setInput('')
  }

  return (
    <div className="app">
      <header className="header">
        <h1>沈昭叙</h1>
        <span className="subtitle">昭昭</span>
      </header>
      <main className="chat">
        {messages.map((m, i) => (
          <div key={i} className={`bubble ${m.role}`}>
            {m.content}
          </div>
        ))}
      </main>
      <footer className="input-bar">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="说点什么…"
        />
        <button onClick={send}>发送</button>
      </footer>
    </div>
  )
}
