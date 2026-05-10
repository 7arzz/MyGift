export default function Paper({ isOpen, content, to, from }) {
  return (
    <div className={`paper ${isOpen ? "is-open" : ""}`}>
      <div className="letter-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', margin: '0 0 0.5rem', fontSize: '1.4rem', color: 'var(--text-main)' }}>
          Dear {to || "Special One"},
        </h2>
        <p style={{ 
          fontFamily: 'var(--font-hand)', 
          fontSize: '1.25rem', 
          color: 'var(--text-main)', 
          lineHeight: '1.4',
          margin: '0',
          whiteSpace: 'pre-wrap'
        }}>
          {content || "No message provided."}
        </p>
        <div style={{ marginTop: '2rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '0.75rem', textAlign: 'right' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', margin: 0, fontSize: '0.9rem' }}>With love,</p>
          <p style={{ fontWeight: '600', margin: 0, color: 'var(--accent)' }}>{from || "Digital Gift"}</p>
        </div>
      </div>
    </div>
  );
}




