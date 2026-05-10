import { useState, useEffect } from "react";
import LZString from "lz-string";
import Envelope from "./components/Envelope";
import Creator from "./components/Creator";
import "./App.css";

// Helper for key mapping to shorten URL
const KEY_MAP = {
  content: "c",
  color: "o",
  to: "t",
  from: "f"
};

const REVERSE_MAP = Object.fromEntries(Object.entries(KEY_MAP).map(([k, v]) => [v, k]));

export default function App() {
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#e76f51"); // Default Romantic Red
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [mode, setMode] = useState("edit");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const data = params.get("d");
    if (data) {
      try {
        const compressed = LZString.decompressFromEncodedURIComponent(data);
        const rawObj = JSON.parse(compressed);
        
        // Map shortened keys back to full names
        const decoded = {};
        for (const [k, v] of Object.entries(rawObj)) {
          decoded[REVERSE_MAP[k] || k] = v;
        }

        setContent(decoded.content);
        setColor(decoded.color);
        setTo(decoded.to || "");
        setFrom(decoded.from || "");
        setMode("view");
      } catch (e) {
        console.error("Failed to decode data", e);
      }
    }
  }, []);

  const handleCreate = (newContent, newColor, newTo, newFrom) => {
    setContent(newContent);
    setColor(newColor);
    setTo(newTo);
    setFrom(newFrom);
    setMode("view");
    
    // Map full names to shortened keys
    const rawObj = {
      [KEY_MAP.content]: newContent,
      [KEY_MAP.color]: newColor,
      [KEY_MAP.to]: newTo,
      [KEY_MAP.from]: newFrom
    };
    
    const encoded = LZString.compressToEncodedURIComponent(JSON.stringify(rawObj));
    const newUrl = `${window.location.origin}${window.location.pathname}?d=${encoded}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Romantic Link copied! Send it to your love ❤️");
  };

  return (
    <main className="app-container">
      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}>❤️</div>
        ))}
      </div>

      {mode === "edit" ? (
        <Creator onCreate={handleCreate} />
      ) : (
        <>
          <header className="view-header">
            <h1 className="romantic-title">To {to || "My Love"}</h1>
            <p className="romantic-subtitle">A special secret from {from || "someone special"}</p>
          </header>

          <section className="envelope-section">
            <Envelope content={content} color={color} to={to} from={from} />
          </section>

          <footer className="footer-actions">
            <p className="romantic-hint">
              <span>Click the wax seal</span> to reveal my heart
            </p>
            <div className="button-group">
              <button className="btn-share romantic" onClick={handleShare}>
                Share Love
              </button>
              <button className="btn-secondary romantic" onClick={() => setMode("edit")}>
                Create Another
              </button>
            </div>
          </footer>
        </>
      )}
    </main>
  );
}



