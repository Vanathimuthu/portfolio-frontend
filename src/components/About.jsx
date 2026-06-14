function About() {
  return (
    <section
      id="about"
      className="
      max-w-7xl
      mx-auto
      py-24
      px-10
      "
    >
      <h2 className="text-5xl font-bold">
        About Me
      </h2>

      <div
        className="
        bg-slate-900
        p-10
        rounded-2xl
        mt-10
        "
      >
        <p className="text-gray-400 leading-8">
          Python Backend Developer with
          experience building enterprise
          applications using Django,
          DRF, PostgreSQL, MySQL,
          Docker and Cloud technologies.
        </p>
      </div>
    </section>
  );
}

export default About;