export default function BodyEnvelopeFront() {
  return (
    <div
      className="envelope-part envelope-front"
      style={{
        clipPath: "polygon(0 35%, 100% 35%, 100% 100%, 0 100%, 50% 50%)",
        background: "linear-gradient(to top, var(--envelope-bg), var(--envelope-inner))",
        borderRadius: "0 0 8px 8px"
      }}
    />
  );
}

