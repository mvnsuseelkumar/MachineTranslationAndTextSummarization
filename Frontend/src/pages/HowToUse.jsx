export default function HowToUse() {
  return (
    <div className="row page-wide" style={{gap:16}}>
      <section className="panel" style={{textAlign:'center'}}>
        <h2>Get results in seconds</h2>
        <p className="muted">Two simple flows: Translation and Summarization. Choose your path below.</p>
        <div className="hero-cta" style={{justifyContent:'center'}}>
          <a className="btn primary" href="/translate">Try Translation</a>
          <a className="btn" href="/summarize">Try Summarization</a>
        </div>
      </section>

      <section className="row" style={{gap:16, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
        <div className="panel" style={{position:'relative'}}>
          <h3 style={{marginTop:0}}>Translation in 3 steps</h3>
          <div className="step-grid">
            <div className="step"><span className="icon">🌐</span><div><b>Choose languages</b><div className="muted">Pick source and target from 200+ options.</div></div></div>
            <div className="step"><span className="icon">📝</span><div><b>Paste text</b><div className="muted">Add your content to the input box.</div></div></div>
            <div className="step"><span className="icon">⚡</span><div><b>Translate</b><div className="muted">Click Translate and copy the result.</div></div></div>
          </div>
          <div className="muted">Under the hood: <code className="mono">POST /translate</code></div>
          <div className="hero-cta" style={{marginTop:12}}>
            <a className="btn primary" href="/translate">Start Translating</a>
          </div>
        </div>

        <div className="panel" style={{position:'relative'}}>
          <h3 style={{marginTop:0}}>Summarization in 3 steps</h3>
          <div className="step-grid">
            <div className="step"><span className="icon">🎛️</span><div><b>Select model</b><div className="muted">Small = faster, CPU‑friendly. Large = higher quality.</div></div></div>
            <div className="step"><span className="icon">🧾</span><div><b>Paste text</b><div className="muted">Set <b>Min</b>/<b>Max</b> length to control summary size.</div></div></div>
            <div className="step"><span className="icon">✨</span><div><b>Summarize</b><div className="muted">Generate and copy the summary.</div></div></div>
          </div>
          <div className="muted">Under the hood: <code className="mono">POST /summarize</code></div>
          <div className="hero-cta" style={{marginTop:12}}>
            <a className="btn primary" href="/summarize">Start Summarizing</a>
          </div>
        </div>
      </section>

      <section className="panel" style={{textAlign:'center'}}>
        <h3>Tips for best results</h3>
        <div className="stats" style={{justifyContent:'center'}}>
          <span className="badge">Use clear sentences</span>
          <span className="badge">Prefer paragraphs over walls of text</span>
          <span className="badge">Try Large model for higher quality</span>
        </div>
      </section>
    </div>
  )
}


