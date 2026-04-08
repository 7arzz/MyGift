import Envelope from "./components/Envelope";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-6 tracking-wide">
        Digital Letter
      </h1>

      {/* Envelope */}
      <Envelope />

      {/* Hint kecil */}
      <p className="mt-6 text-sm text-gray-600">
        Klik amplop untuk membuka surat
      </p>
    </div>
  );
}
