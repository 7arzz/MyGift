import { useState } from "react";

const PRESET_COLORS = [
  "#d4a373", // Original Brown
  "#e76f51", // Terracotta
  "#2a9d8f", // Teal
  "#e9c46a", // Gold
  "#f4a261", // Orange
  "#606c38", // Olive
  "#bc6c25", // Copper
];

export default function Creator({ onCreate }) {
  const [text, setText] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [selectedColor, setSelectedColor] = useState(PRESET_COLORS[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onCreate(text, selectedColor, to, from);
  };

  return (
    <div className="creator-card glass">
      <h2 className="creator-title">Create Your Gift</h2>
      <p className="creator-subtitle">Write a message and pick a color</p>

      <form onSubmit={handleSubmit} className="creator-form">
        <div className="form-row">
          <div className="form-group flex-1">
            <label>To</label>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Recipient name"
              maxLength={20}
            />
          </div>
          <div className="form-group flex-1">
            <label>From</label>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Your name"
              maxLength={20}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write something heartfelt..."
            required
            maxLength={500}
          />
          <span className="char-count">{text.length}/500</span>
        </div>

        <div className="form-group">
          <label>Envelope Color</label>
          <div className="color-options">
            <div className="color-presets">
              {PRESET_COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={`color-btn ${selectedColor === c ? "active" : ""}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(c)}
                  aria-label={`Select color ${c}`}
                />
              ))}
            </div>
            <div className="color-custom">
              <label className="custom-color-label">
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="color-picker-input"
                />
                <span>Custom</span>
              </label>
            </div>
          </div>
        </div>


        <button type="submit" className="btn-primary" disabled={!text.trim()}>
          Generate Gift
        </button>
      </form>
    </div>
  );
}
