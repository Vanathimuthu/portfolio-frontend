

import { motion } from "framer-motion";

function ProjectCard({ title, description, image, tech, github, live }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-[2rem] border border-pink-500/30 bg-pink-500/5 shadow-[0_20px_60px_-35px_rgba(236,72,153,0.2)] hover:-translate-y-1 hover:border-pink-400 transition-transform duration-300"
    >
      <div className="overflow-hidden rounded-[2rem]">
        <img src={image} alt={title} className="h-64 w-full object-cover object-center" />
      </div>

      <div className="p-8">
        <div className="inline-flex rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-pink-300">
          Project
        </div>

        <h3 className="mt-5 text-3xl font-bold tracking-tight text-white">{title}</h3>

        <p className="mt-4 text-slate-400 leading-7">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-sm text-pink-300">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 hover:bg-pink-500 transition duration-200"
          >
            GitHub
          </a>
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-pink-600 px-5 py-2 text-sm font-semibold text-pink-200 hover:bg-pink-600/10 transition duration-200"
          >
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;