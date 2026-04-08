export default function BodyEnvelopeFront() {
  return (
    <div
      className="absolute w-full h-full bg-red-400 z-20"
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 60%)",
      }}
    />
  );
}
