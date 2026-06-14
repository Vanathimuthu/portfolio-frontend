import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050816] py-12">
      <div className="max-w-7xl mx-auto px-6 md:flex md:items-start md:justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold">Vanathi</h2>
          <p className="mt-3 max-w-sm text-slate-400">Full Stack Developer</p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-slate-300">
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-500">Navigation</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">About</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-pink-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-500">Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">Github</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">LinkedIn</a>
              </li>
              {/* <li>
                <a href="https://buymeacoffee.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">Buy me a coffee</a>
              </li>
              <li>
                <a href="https://blog.example.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">Blog</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-sm text-slate-500">© 2026 Vanathi Muthu</p>
    </footer>
  );
}

export default Footer;