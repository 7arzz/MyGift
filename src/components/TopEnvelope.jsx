export default function TopEnvelope({ isOpen }) {
  return (
    <div
      className={`
        absolute w-full h-1/2 bg-red-500 top-0 z-30 origin-top
        transition-transform duration-500
        ${isOpen ? "-rotate-180" : "rotate-0"}
      `}
      style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
    />
  );
}
