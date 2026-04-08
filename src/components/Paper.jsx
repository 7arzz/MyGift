export default function Paper({ isOpen }) {
  return (
    <div
      className={`
        absolute w-[90%] h-[120%] bg-white left-1/2 -translate-x-1/2 rounded shadow
        transition-all duration-500 z-10
        ${isOpen ? "-translate-y-40" : "translate-y-0"}
      `}
    >
      <div className="p-4 text-sm">
        <h2 className="font-semibold mb-2">Surat</h2>
        <p>Ini isi surat yang nantinya akan digenerate dari form.</p>
      </div>
    </div>
  );
}
