import { useMemo, useState } from 'react'
import { translate as apiTranslate } from '../api/client.js'

const languageMap = {"Acehnese":"ace_Latn","Achomi":"acm_Arab","Acoli":"acq_Arab","Tunisian Arabic":"aeb_Arab","Afrikaans":"afr_Latn","South Levantine Arabic":"ajp_Arab","Akan":"aka_Latn","Amharic":"amh_Ethi","North Levantine Arabic":"apc_Arab","Arabic":"arb_Arab","Najdi Arabic":"ars_Arab","Moroccan Arabic":"ary_Arab","Egyptian Arabic":"arz_Arab","Assamese":"asm_Beng","Asturian":"ast_Latn","Awadhi":"awa_Deva","Aymara":"ayr_Latn","South Azerbaijani":"azb_Arab","North Azerbaijani":"azj_Latn","Bashkir":"bak_Cyrl","Bambara":"bam_Latn","Balinese":"ban_Latn","Belarusian":"bel_Cyrl","Bemba":"bem_Latn","Bengali":"ben_Beng","Bhojpuri":"bho_Deva","Banjarese":"bjn_Latn","Tibetan":"bod_Tibt","Bosnian":"bos_Latn","Buginese":"bug_Latn","Bulgarian":"bul_Cyrl","Catalan":"cat_Latn","Cebuano":"ceb_Latn","Czech":"ces_Latn","Chokwe":"cjk_Latn","Central Kurdish":"ckb_Arab","Crimean Tatar":"crh_Latn","Welsh":"cym_Latn","Danish":"dan_Latn","German":"deu_Latn","Dinka":"dik_Latn","Dyula":"dyu_Latn","Dzongkha":"dzo_Tibt","Greek":"ell_Grek","English":"eng_Latn","Esperanto":"epo_Latn","Estonian":"est_Latn","Basque":"eus_Latn","Ewe":"ewe_Latn","Faroese":"fao_Latn","Persian":"pes_Arab","Fijian":"fij_Latn","Finnish":"fin_Latn","Fon":"fon_Latn","French":"fra_Latn","Friulian":"fur_Latn","Fuvantsa":"fuv_Latn","Scottish Gaelic":"gla_Latn","Irish":"gle_Latn","Galician":"glg_Latn","Guarani":"grn_Latn","Gujarati":"guj_Gujr","Haitian Creole":"hat_Latn","Hausa":"hau_Latn","Hebrew":"heb_Hebr","Hindi":"hin_Deva","Chhattisgarhi":"hne_Deva","Croatian":"hrv_Latn","Hungarian":"hun_Latn","Armenian":"hye_Armn","Igbo":"ibo_Latn","Iloko":"ilo_Latn","Indonesian":"ind_Latn","Icelandic":"isl_Latn","Italian":"ita_Latn","Javanese":"jav_Latn","Japanese":"jpn_Jpan","Kabyle":"kab_Latn","Kachin":"kac_Latn","Kamba":"kam_Latn","Kannada":"kan_Knda","Kashmiri Arabic":"kas_Arab","Kashmiri Devanagari":"kas_Deva","Georgian":"kat_Geor","Central Kanuri":"knc_Latn","Kazakh":"kaz_Cyrl","Khmer":"khm_Khmr","Kikuyu":"kik_Latn","Kinyarwanda":"kin_Latn","Kyrgyz":"kir_Cyrl","Kimbundu":"kmb_Latn","Kongo":"kon_Latn","Korean":"kor_Hang","Kurmanji Kurdish":"kmr_Latn","Lao":"lao_Laoo","Latvian":"lvs_Latn","Ligurian":"lij_Latn","Limburgish":"lim_Latn","Lingala":"lin_Latn","Lithuanian":"lit_Latn","Lombard":"lmo_Latn","Latgalian":"ltg_Latn","Luxembourgish":"ltz_Latn","Luba":"lua_Latn","Ganda":"lug_Latn","Luo":"luo_Latn","Lushootseed":"lus_Latn","Magahi":"mag_Deva","Maithili":"mai_Deva","Malayalam":"mal_Mlym","Marathi":"mar_Deva","Minangkabau":"min_Latn","Macedonian":"mkd_Cyrl","Piedmontese":"plt_Latn","Maltese":"mlt_Latn","Manipuri":"mni_Beng","Khakas":"khk_Cyrl","Mossi":"mos_Latn","Māori":"mri_Latn","Malay":"zsm_Latn","Burmese":"mya_Mymr","Dutch":"nld_Latn","Norwegian Nynorsk":"nno_Latn","Norwegian Bokmål":"nob_Latn","Nepali":"npi_Deva","Northern Sotho":"nso_Latn","Nuer":"nus_Latn","Chichewa":"nya_Latn","Occitan":"oci_Latn","Gagauz":"gaz_Latn","Odia":"ory_Orya","Pangasinan":"pag_Latn","Punjabi":"pan_Guru","Papiamento":"pap_Latn","Polish":"pol_Latn","Portuguese":"por_Latn","Dari":"prs_Arab","Pashto":"pbt_Arab","Quechua":"quy_Latn","Romanian":"ron_Latn","Rundi":"run_Latn","Russian":"rus_Cyrl","Sango":"sag_Latn","Sanskrit":"san_Deva","Santali":"sat_Beng","Sicilian":"scn_Latn","Shan":"shn_Mymr","Sinhala":"sin_Sinh","Slovak":"slk_Latn","Slovenian":"slv_Latn","Samoan":"smo_Latn","Shona":"sna_Latn","Sindhi":"snd_Arab","Somali":"som_Latn","Southern Sotho":"sot_Latn","Spanish":"spa_Latn","Alsatian":"als_Latn","Sardinian":"srd_Latn","Serbian":"srp_Cyrl","Swati":"ssw_Latn","Sundanese":"sun_Latn","Swedish":"swe_Latn","Swahili":"swh_Latn","Silesian":"szl_Latn","Tamil":"tam_Taml","Tatar":"tat_Cyrl","Telugu":"tel_Telu","Tajik":"tgk_Cyrl","Tagalog":"tgl_Latn","Thai":"tha_Thai","Tigrinya":"tir_Ethi","Tamasheq Latin":"taq_Latn","Tamasheq Tifinagh":"taq_Tfng","Tok Pisin":"tpi_Latn","Tswana":"tsn_Latn","Tsonga":"tso_Latn","Turkmen":"tuk_Latn","Tumbuka":"tum_Latn","Turkish":"tur_Latn","Twi":"twi_Latn","Tamazight Tifinagh":"tzm_Tfng","Uyghur":"uig_Arab","Ukrainian":"ukr_Cyrl","Umbundu":"umb_Latn","Urdu":"urd_Arab","Uzbek":"uzn_Latn","Venetian":"vec_Latn","Vietnamese":"vie_Latn","Waray":"war_Latn","Wolof":"wol_Latn","Xhosa":"xho_Latn","Yiddish":"ydd_Hebr","Yoruba":"yor_Latn","Cantonese":"yue_Hant","Chinese Simplified":"zho_Hans","Chinese Traditional":"zho_Hant","Zulu":"zul_Latn"}

export default function Translation() {
  const languages = useMemo(() => Object.keys(languageMap).sort(), [])
  const [text, setText] = useState('')
  const [src, setSrc] = useState('English')
  const [tgt, setTgt] = useState('Hindi')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const chars = text.length

  async function handleTranslate() {
    setLoading(true)
    setOutput('')
    try {
      const data = await apiTranslate({ text, src_lang: languageMap[src], tgt_lang: languageMap[tgt] })
      setOutput(typeof data === 'string' ? data : String(data))
    } catch (e) {
      setOutput('Error: ' + e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="row page-wide">
      <div className="row two">
        <div className="col" style={{minWidth:0}}>
          <label>Source language</label>
          <select value={src} onChange={e => setSrc(e.target.value)}>
            {languages.map(name => (<option key={name} value={name}>{name}</option>))}
          </select>
        </div>
        <div className="col" style={{minWidth:0}}>
          <label>Target language</label>
          <select value={tgt} onChange={e => setTgt(e.target.value)}>
            {languages.map(name => (<option key={name} value={name}>{name}</option>))}
          </select>
        </div>
      </div>

      <div className="panel" style={{marginTop:12}}>
        <div className="controls" style={{marginBottom:8}}>
          <button className="btn ghost icon-btn" onClick={() => { const s = src; setSrc(tgt); setTgt(s); }}>↔ Swap</button>
          <button className="btn ghost icon-btn" onClick={() => setText('')}>✕ Clear</button>
          <span className="spacer" />
          {loading && <span className="spinner" />}
        </div>
        <label>Input text</label>
        <div className="row">
          <div className="col" style={{minWidth:0}}>
            <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Type text to translate..." />
          </div>
        </div>
        <div className="stats" style={{marginTop:12}}><span className="badge mono">{words} words</span><span className="badge mono">{chars} chars</span></div>
        <div style={{marginTop:12}}>
          <button className="btn primary" onClick={handleTranslate} disabled={loading || !text.trim()}>{loading ? 'Translating…' : 'Translate'}</button>
        </div>
      </div>

      <div className="panel" style={{marginTop:12}}>
        <label>Translation</label>
        <div className="output">{output}</div>
        <div className="controls" style={{marginTop:8}}>
          <button className="btn ghost" onClick={async()=>{ await navigator.clipboard.writeText(output || ''); setCopied(true); setTimeout(()=>setCopied(false), 800); }} disabled={!output}>Copy</button>
          {copied && <span className="muted">Copied!</span>}
        </div>
      </div>
    </div>
  )
}


