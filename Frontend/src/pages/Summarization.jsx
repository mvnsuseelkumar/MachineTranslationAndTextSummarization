import { useMemo, useState } from 'react'
import { summarize as apiSummarize } from '../api/client.js'

export default function Summarization() {
  const [text, setText] = useState('')
  const [model, setModel] = useState('small')
  const [minLen, setMinLen] = useState('')
  const [maxLen, setMaxLen] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const inputWords = useMemo(() => text.trim() ? text.trim().split(/\s+/).length : 0, [text])
  const inputChars = text.length
  const outputWords = useMemo(() => output.trim() ? output.trim().split(/\s+/).length : 0, [output])
  const outputChars = output.length

  async function handleSummarize() {
    setLoading(true)
    setOutput('')
    try {
      const data = await apiSummarize({
        text,
        model_size: model,
        max_length: maxLen ? Number(maxLen) : null,
        min_length: minLen ? Number(minLen) : null
      })
      setOutput(typeof data === 'string' ? data : String(data))
    } catch (e) {
      setOutput('Error: ' + e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row page-wide">
      <div className="panel">
        <div className="row two">
          <div className="col" style={{minWidth:0}}>
            <label>Model</label>
            <div className="controls">
              <button className={`pill ${model==='small' ? 'active' : ''}`} onClick={()=>setModel('small')}>Small</button>
              <button className={`pill ${model==='large' ? 'active' : ''}`} onClick={()=>setModel('large')}>Large</button>
            </div>
          </div>
          <div className="col" style={{minWidth:0}}>
            <label>Min length</label>
            <input type="number" placeholder="auto" value={minLen} onChange={e => setMinLen(e.target.value)} />
          </div>
          <div className="col" style={{minWidth:0}}>
            <label>Max length</label>
            <input type="number" placeholder="auto" value={maxLen} onChange={e => setMaxLen(e.target.value)} />
          </div>
        </div>

        <label style={{marginTop:12}}>Input text</label>
        <div className="row">
          <div className="col" style={{minWidth:0}}>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Paste the text to summarize..." />
          </div>
        </div>
        <div className="stats" style={{marginTop:12}}><span className="badge mono">{inputWords} words</span><span className="badge mono">{inputChars} chars</span></div>
        <div style={{marginTop:12}}>
          <button className="btn primary" onClick={handleSummarize} disabled={loading || !text.trim()}>{loading ? 'Summarizing…' : 'Summarize'}</button>
          {loading && <span style={{marginLeft:8}} className="spinner" />}
        </div>
      </div>

      <div className="panel" style={{marginTop:12}}>
        <label>Summary</label>
        <div className="output">{output}</div>
        <div className="stats" style={{marginTop:8}}>
          <span className="badge mono">{outputWords} words</span>
          <span className="badge mono">{outputChars} chars</span>
          <span className="spacer" />
          <button className="btn ghost" onClick={async()=>{ await navigator.clipboard.writeText(output || ''); setCopied(true); setTimeout(()=>setCopied(false), 800); }} disabled={!output}>Copy</button>
          {copied && <span className="muted">Copied!</span>}
        </div>
      </div>
    </div>
  )
}


