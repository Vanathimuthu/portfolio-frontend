import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-900 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center gap-6">
        <h1 className="text-3xl font-bold tracking-tight text-white">Vanathi</h1>

        <div className="flex flex-wrap items-center gap-8 text-slate-300 text-sm">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400 transition">
            Home
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400 transition">
            Projects
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400 transition">
            About
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-pink-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;