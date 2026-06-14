function AboutDashboard() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h2 className="text-5xl font-bold">About me</h2>
        <p className="mt-4 max-w-3xl text-slate-400 leading-8">
          Python Backend Developer with 1+ year of experience designing, developing, and maintaining scalable web applications and RESTful APIs using Django and Django REST Framework. Skilled in API integration, authentication, debugging, cloud-based deployments, CI/CD, and delivering secure, maintainable software solutions.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-[1.4fr_1fr]">
        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-pink-500/30 bg-pink-500/5 p-8 shadow-[0_30px_70px_-40px_rgba(236,72,153,0.2)]">
            <h3 className="text-xl font-semibold text-pink-300 mb-6">Contact</h3>
            <div className="space-y-4 text-slate-300">
              <div className="rounded-2xl border border-pink-500/20 bg-pink-500/5 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-pink-400/70">Email</p>
                <p className="mt-2 font-medium text-white">vanathivanathi52@gmail.com</p>
              </div>
              <div className="rounded-2xl border border-pink-500/20 bg-pink-500/5 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-pink-400/70">LinkedIn</p>
                <p className="mt-2 font-medium text-white">linkedin.com/in/vanathi-m-42a3bb251</p>
              </div>
              <div className="rounded-2xl border border-pink-500/20 bg-pink-500/5 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-pink-400/70">Phone</p>
                <p className="mt-2 font-medium text-white">+91 7094802947</p>
              </div>
              <div className="rounded-2xl border border-pink-500/20 bg-pink-500/5 p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-pink-400/70">Location</p>
                <p className="mt-2 font-medium text-white">Taramani, Velachery, Chennai</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-pink-500/30 bg-pink-500/5 p-8 shadow-[0_30px_70px_-40px_rgba(236,72,153,0.2)]">
            <h3 className="text-xl font-semibold text-pink-300 mb-6">Professional Experience</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Python Backend Developer at Emayam Technologies Private Limited | Feb 2025 – Present</li>
              <li>Developed and maintained RESTful APIs using Django REST Framework.</li>
              <li>Implemented role-based authentication, authorization, and secure API endpoints.</li>
              <li>Containerized applications with Docker and supported production deployments.</li>
              <li>Collaborated with frontend and QA teams.</li>
              <li>Optimized database performance using PostgreSQL and MySQL.</li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] border border-pink-500/30 bg-pink-500/5 p-8 shadow-[0_30px_70px_-40px_rgba(236,72,153,0.2)]">
            <h3 className="text-xl font-semibold text-pink-300 mb-6">Techstack</h3>
            <div className="flex flex-wrap gap-3">
              {["HTML5","CSS3","JavaScript","React.js",
                "Python",
                "Django",
                "Django REST Framework", "REST API",
                "PostgreSQL",
                "MySQL",
                "Docker",
                "Git",
                "GitHub",
               "Postman"
              ].map((skill) => (
                <span key={skill} className="rounded-full border border-pink-500/40 bg-pink-500/10 px-4 py-2 text-sm text-pink-300 hover:bg-pink-500/20 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-pink-500/30 bg-pink-500/5 p-8 shadow-[0_30px_70px_-40px_rgba(236,72,153,0.2)]">
            <h3 className="text-xl font-semibold text-pink-300 mb-6">Certifications</h3>
            <ul className="list-disc pl-5 space-y-3 text-slate-300">
              <li>Python Full Stack Developer at Besant Technology</li>
              <li>Certificate for IBM project: IOT based Smart Crop Protection System</li>
              <li>Java certification course on Udemy</li>
              <li>Azure Fundamentals and Azure App Service learning</li>
              <li>Languages: English, Tamil</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDashboard;