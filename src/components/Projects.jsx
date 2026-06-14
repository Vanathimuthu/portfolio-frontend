import ProjectCard from "./ProjectCard";

import focult from "../assets/focult.jpg";
import nexliv from "../assets/nexliv.jpg";

function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-12">
        <p className="text-5xl font-bold uppercase tracking-[0.36em] text-pink-400">Projects</p>
        {/* <h2 className="mt-4 text-5xl font-bold text-white">Two resume-driven full stack projects</h2> */}
        {/* <p className="mt-4 max-w-3xl text-slate-400 leading-8">
          Selected work showing backend API design, secure authentication, and responsive UI.
        </p> */}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <ProjectCard
          title="FOCULT"
          image={focult}
          description="Employee monitoring app for desktop activity tracking, screenshot capture, analytics, and admin automation. Built with Django, PostgreSQL, Docker, and secure REST APIs."
          tech={["Python", "Django", "DRF", "PostgreSQL", "Docker", "REST API"]}
          github="https://github.com/"
          live="#"
        />

        <ProjectCard
          title="NEXLIV"
          image={nexliv}
          description="Land and property buying platform with secure authentication, role-based access, and scalable listing workflows. Designed normalized MySQL data models and integrated image upload support."
          tech={["Python", "Django", "DRF", "React.js", "MySQL", "REST API"]}
          github="https://github.com/"
          live="#"
        />
      </div>
    </section>
  );
}

export default Projects;