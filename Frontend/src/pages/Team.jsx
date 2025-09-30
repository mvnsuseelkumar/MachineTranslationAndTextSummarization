const members = [
  { name: 'M.V.N.Suseel Kumar', role: 'Project Lead', bio: 'Leads architecture, integration, and release quality.', gender: 'male' },
  { name: 'B.Karthik', role: 'Backend Engineer', bio: 'Owns Flask APIs, performance, and reliability.', gender: 'male' },
  { name: 'K.Swathi', role: 'ML Engineer', bio: 'Builds and evaluates translation/summarization models.', gender: 'female' },
  { name: 'P.Ananya', role: 'Frontend Engineer', bio: 'Crafts UX, interactions, and accessibility.', gender: 'female' },
]

function Initials({ name, gender }) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0,2).join('').toUpperCase()
  const cls = gender === 'male' ? 'male' : 'female'
  return <span className={`avatar ${cls}`}>{initials}</span>
}

export default function Team() {
  return (
    <div className="page-wide">
      <h2>Our Team</h2>
      <div className="team-grid" style={{marginTop:16}}>
        {members.map(m => (
          <div className="member" key={m.name}>
            <div style={{display:'flex',alignItems:'center', gap:12}}>
              <Initials name={m.name} gender={m.gender} />
              <div>
                <div style={{fontWeight:700, fontSize:16}}>{m.name}</div>
                {/* <div className="muted">{m.role}</div> */}
              </div>
            </div>
            {/* <p style={{marginTop:10}} className="muted">{m.bio}</p> */}
            <div className="stats" style={{marginTop:8}}>
              <span className="badge">Delivery-focused</span>
              <span className="badge">Team player</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


