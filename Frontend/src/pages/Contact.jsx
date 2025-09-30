import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className="panel page-wide">
      <h2>Contact</h2>
      <p className="muted">Have feedback or questions? Send us a message.</p>
      <div className="row" style={{gap: '16px'}}>
        <div className="col">
          <label>Name</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
        </div>
        <div className="col">
          <label>Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com" />
        </div>
        <div className="col">
          <label>Message</label>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Type your message..." />
        </div>
        <div style={{marginTop: '8px'}}>
          <a className="btn primary" href={`mailto:team@example.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`}>Send Email</a>
        </div>
      </div>
    </div>
  )
}


