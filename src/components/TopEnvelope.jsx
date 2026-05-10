export default function TopEnvelope({ isOpen }) {
  return (
    <div
      className={`envelope-part envelope-top ${isOpen ? "is-open" : ""}`}
      style={{ 
        clipPath: "polygon(0 0, 100% 0, 50% 100%)",
        background: "linear-gradient(to bottom, var(--envelope-bg), var(--envelope-inner))"
      }}
    />
  );
}

