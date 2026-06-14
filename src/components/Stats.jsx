function Stats() {
  const stats = [
    {
      number: "1+",
      label: "Years Experience",
    },
    {
      number: "20+",
      label: "APIs Developed",
    },
    {
      number: "10+",
      label: "Projects",
    },
    {
      number: "15+",
      label: "Technologies",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-10">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="
            bg-slate-900
            p-8
            rounded-2xl
            text-center
            border
            border-slate-800
            "
          >
            <h2 className="text-4xl font-bold text-purple-500">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;