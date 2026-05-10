import { useState } from "react";
import Paper from "./Paper";

export default function Envelope({ content, color, to, from }) {
  const [isOpen, setIsOpen] = useState(false);

  // Simple brightness adjustment for 3D effect
  const darkColor = color; // We'll use CSS filters for the dark parts
  
  const envelopeStyle = {
    "--envelope-bg": color,
    "--envelope-dark": `color-mix(in srgb, ${color}, black 15%)`,
    "--envelope-light": `color-mix(in srgb, ${color}, white 15%)`,
    "--envelope-inner": `color-mix(in srgb, ${color}, black 5%)`,
  };

  return (
    <div
      className="envelope-wrapper"
      onClick={() => setIsOpen(!isOpen)}
      style={envelopeStyle}
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
    >
      <div className="envelope">
        {/* Top Flap */}
        <div className={`flap flap-top ${isOpen ? "is-open" : ""}`} />
        
        {/* Side Flaps */}
        <div className="flap flap-left" />
        <div className="flap flap-right" />
        
        {/* Bottom Flap */}
        <div className="flap flap-bottom" />

        {/* Recipient Name on Front */}
        {!isOpen && to && (
          <div className="envelope-label">
            <span>To:</span> {to}
          </div>
        )}

        {/* The Paper Inside */}
        <Paper isOpen={isOpen} content={content} to={to} from={from} />


        {/* Wax Seal */}
        <div className={`wax-seal ${isOpen ? "is-open" : ""}`} />
      </div>
    </div>
  );
}



