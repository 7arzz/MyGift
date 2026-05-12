export default function Paper({ isUp, content, to, from }) {
  return (
    <div className={`paper ${isUp ? "is-open" : ""}`}>
      <h2 style={{ 
        color: '#c0392b', 
        margin: '0 0 15px 0', 
        textAlign: 'center', 
        borderBottom: '2px solid #f39c12', 
        paddingBottom: '10px',
        fontFamily: 'var(--font-serif)'
      }}>
        Dear {to || "Special One"}
      </h2>
      
      <p style={{ 
        color: '#444', 
        fontSize: '15px', 
        lineHeight: '1.6', 
        margin: '0 0 12px 0',
        fontFamily: 'var(--font-sans)',
        whiteSpace: 'pre-wrap'
      }}>
        {content || "Halo, ini adalah contoh surat dengan teks yang cukup panjang. Anda sekarang bisa mengisi kertas ini dengan kalimat sebanyak apapun!"}
      </p>

      <p style={{ 
        color: '#555', 
        fontSize: '15px', 
        margin: '20px 0 0', 
        textAlignment: 'right', 
        fontStyle: 'italic',
        textAlign: 'right',
        fontFamily: 'var(--font-serif)'
      }}>
        Dari: {from || "Hati ❤️"}
      </p>
    </div>
  );
}





