import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_460px] gap-16 items-center py-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-pink-300">
            Available for Work
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white">
            Full Stack developer
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl text-slate-300 leading-9">
            I build clean, scalable applications with Django, Django REST Framework, React, PostgreSQL, MySQL, Docker, and modern UI/UX. My portfolio reflects resume-backed work in backend API development and product-focused frontend design.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="/vanathi Exp CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/20 hover:opacity-95 transition duration-200"
            >
              Resume
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-pink-400 px-8 py-3 text-base font-semibold text-pink-400 hover:bg-pink-500/10 transition duration-200"
            >
              Projects
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-slate-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-200">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition duration-200">
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="rounded-[2rem] border border-pink-500/10 bg-[#06060f] p-8 shadow-[0_40px_120px_-60px_rgba(236,72,153,0.28)]">
            <div className="rounded-[1.75rem] border border-pink-500/30 bg-gradient-to-br from-pink-500/5 to-[#070707] p-6">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-400">Resume Highlights</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Product-focused backend & frontend</h3>

              <ul className="mt-4 grid gap-2 text-slate-300 list-disc pl-5">
                <li>Design and implement RESTful APIs with Django REST Framework</li>
                <li>Authentication & role-based authorization</li>
                <li>Dockerized deployments and CI/CD workflows</li>
                <li>Responsive UI using React with attention to UX</li>
                <li>PostgreSQL / MySQL data modelling and optimization</li>
              </ul>

              <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl bg-pink-500/5 border border-pink-500/30 p-4 text-center">
                  <p className="text-3xl font-bold text-pink-400">3+</p>
                  <p className="mt-1 text-sm text-slate-400">Projects</p>
                </div>
                <div className="rounded-3xl bg-pink-500/5 border border-pink-500/30 p-4 text-center">
                  <p className="text-3xl font-bold text-pink-400">1+</p>
                  <p className="mt-1 text-sm text-slate-400">Years</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
