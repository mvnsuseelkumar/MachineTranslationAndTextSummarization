import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className="hero page-wide">
      <div style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', alignItems:'center', gap:24}}>
        <div>
          <h1 className="hero-title gradient-text">TransSummarize</h1>
          <p className="hero-sub">Powerful machine translation and text summarization in one elegant app.</p>
          <div className="hero-cta" style={{justifyContent:'flex-start'}}>
            <NavLink to="/translate" className="btn primary">Start Translating</NavLink>
            <NavLink to="/summarize" className="btn">Summarize Text</NavLink>
          </div>
          <div className="stats" style={{marginTop:18}}>
            <span className="badge">200+ languages</span>
            <span className="badge">2 summary models</span>
            <span className="badge">Fast & elegant</span>
          </div>
        </div>
        <div className="panel" style={{minHeight:220}}>
          <h3 style={{marginTop:0}}>What you can do</h3>
          <ul>
            <li>Translate paragraphs, messages, or entire documents.</li>
            <li>Summarize long articles into crisp key points.</li>
            <li>Copy results instantly and tweak model settings.</li>
          </ul>
        </div>
      </div>

      <div className="row" style={{marginTop:36, gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))'}}>
        <div className="panel">
          <h3>Reliable</h3>
          <p className="muted">Built on proven models and a robust Flask backend.</p>
        </div>
        <div className="panel">
          <h3>Usable</h3>
          <p className="muted">Clear controls, counters, and accessibility out of the box.</p>
        </div>
        <div className="panel">
          <h3>Fast</h3>
          <p className="muted">Responsive UI with subtle motion and quick feedback.</p>
        </div>
      </div>
    </div>
  )
}

