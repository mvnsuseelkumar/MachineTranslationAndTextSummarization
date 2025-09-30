export default function About() {
  return (
    <div className="row" style={{gap:16}}>
      <section className="panel">
        <h2>What is TransSummarize?</h2>
        <p>
          TransSummarize is a dual‑purpose tool for <b>Machine Translation</b> and <b>Text Summarization</b>.
          It pairs a fast Flask backend with production‑grade models and a clean, responsive UI.
        </p>
      </section>

      <section className="panel">
        <h3>Machine Translation</h3>
        <p>
          We use the NLLB‑200 distilled 600M model to translate across 200+ languages.
          You choose a source and target language, enter text, and the app sends a JSON request to the backend.
        </p>
        <ul>
          <li><b>Coverage</b>: 200+ languages and scripts (Latin, Devanagari, Arabic, Cyrillic, etc.).</li>
          <li><b>Controls</b>: Source/target selectors, quick language swap, copy/clear actions.</li>
          <li><b>Feedback</b>: Word and character counts update as you type; loaders show progress.</li>
        </ul>
        <p className="muted">API: <code className="mono">POST /translate</code> with <code className="mono">{`{ text, src_lang, tgt_lang }`}</code></p>
      </section>

      <section className="panel">
        <h3>Text Summarization</h3>
        <p>
          Summarization condenses long text into a concise version while preserving key information.
          Choose between a <b>Small</b> fast model and a <b>Large</b> higher‑quality model, and optionally set output length bounds.
        </p>
        <ul>
          <li><b>Models</b>: DistilBART (fast) and BART‑Large (quality).</li>
          <li><b>Controls</b>: Min/Max length, live input counters, copy summary button.</li>
          <li><b>Deterministic</b>: We disable sampling for stable, repeatable summaries.</li>
        </ul>
        <p className="muted">API: <code className="mono">POST /summarize</code> with <code className="mono">{`{ text, model_size, min_length?, max_length? }`}</code></p>
      </section>

      <section className="panel">
        <h3>Architecture</h3>
        <ul>
          <li><b>Backend</b>: Flask + CORS, Hugging Face Transformers pipelines.</li>
          <li><b>Frontend</b>: React + Vite, custom dark theme with motion and glass effects.</li>
          <li><b>Transport</b>: JSON over HTTP, simple POST endpoints.</li>
        </ul>
      </section>

      <section className="panel">
        <h3>Limitations & Tips</h3>
        <ul>
          <li>Very long inputs may require increasing the max length or splitting into chunks.</li>
          <li>Low‑resource languages can have variable translation quality; review critical text.</li>
          <li>Keep sensitive data secure; this demo does not implement auth or rate‑limits.</li>
        </ul>
      </section>
    </div>
  )
}


