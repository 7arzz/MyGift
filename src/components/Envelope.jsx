import { useState, useEffect } from "react";
import Paper from "./Paper";

export default function Envelope({ content, color, to, from }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [status, setStatus] = useState("Klik Bintang untuk Membuka");
  const [isDown, setIsDown] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  const [isPaperUp, setIsPaperUp] = useState(false);
  const [isFlapZIndexTop, setIsFlapZIndexTop] = useState(true);

  const envelopeStyle = {
    "--envelope-bg": color,
    "--envelope-dark": `color-mix(in srgb, ${color}, black 20%)`,
    "--envelope-light": `color-mix(in srgb, ${color}, white 20%)`,
  };

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (!isOpen) {
      // OPENING SEQUENCE
      setStatus("Membuka Segel...");
      setIsDown(true);
      
      setTimeout(() => {
        setStatus("Membuka Amplop...");
        setIsFlapOpen(true);
        
        // Change z-index after half the rotation to prevent clipping issues
        setTimeout(() => {
          setIsFlapZIndexTop(false);
          setIsPaperUp(true);
          setStatus("Silakan Dibaca ✨");
          setIsOpen(true);
          setIsAnimating(false);
        }, 600);
      }, 400);
    } else {
      // CLOSING SEQUENCE
      setStatus("Menutup...");
      setIsPaperUp(false);
      
      setTimeout(() => {
        setIsFlapOpen(false);
        
        // Return z-index to top before it finishes closing
        setTimeout(() => {
          setIsFlapZIndexTop(true);
          
          setTimeout(() => {
            setIsDown(false);
            setStatus("Amplop Tertutup 🔐");
            setIsOpen(false);
            setIsAnimating(false);
          }, 300);
        }, 400);
      }, 700);
    }
  };

  return (
    <div className="envelope-container" style={envelopeStyle}>
      <div className="status-text">{status}</div>
      
      {/* Back Panel */}
      <div className="back"></div>
      
      {/* The Paper Inside */}
      <Paper isUp={isPaperUp} content={content} to={to} from={from} />

      {/* Front Panels (kiri, kanan, bawah) */}
      <div className="front-left"></div>
      <div className="front-right"></div>
      <div className="front-bottom"></div>

      {/* Top Flap */}
      <div 
        className={`top-flap ${isFlapOpen ? "is-open" : ""}`}
        style={{ zIndex: isFlapZIndexTop ? 4 : 1 }}
      ></div>


      {/* Star Button (Wax Seal) */}
      <div 
        className={`star-btn ${isDown ? "down" : ""} ${isAnimating ? "animating" : ""}`} 
        onClick={handleToggle}
      ></div>

      {/* To label on front (visible when closed) */}
      {!isOpen && !isAnimating && to && (
        <div className="envelope-label" style={{ zIndex: 5 }}>
          <span>To:</span> {to}
        </div>
      )}
    </div>
  );
}




