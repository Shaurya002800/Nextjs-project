export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 border-b border-gray-800">
      {/* Left */}
      <div className="text-xl font-bold">
        ModelArena
      </div>

      {/* Middle */}
      <div className="hidden md:flex gap-8 text-sm">
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">Track</span>
        <span className="cursor-pointer">About</span>
        <span className="cursor-pointer">FAQ</span>
        <span className="cursor-pointer">Timeline</span>
      </div>

      {/* Right */}
      <button className="bg-lime-400 text-black px-5 py-2 rounded font-semibold">
        Login
      </button>
    </nav>
  );
}
