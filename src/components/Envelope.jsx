import { useState } from "react";
import BodyFront from "./BodyEnvelopeFront";
import BodyBack from "./BodyEnvelopeBack";
import Top from "./TopEnvelope";
import Paper from "./Paper";

export default function Envelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-80 h-56 cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <BodyBack />
      <Paper isOpen={isOpen} />
      <BodyFront />
      <Top isOpen={isOpen} />
    </div>
  );
}
