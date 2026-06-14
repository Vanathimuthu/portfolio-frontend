import { useEffect, useState } from "react";
import axios from "../api/axios";

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get("/skills/");
        setSkills(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-24 px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="
                bg-pink-500/5
                rounded-2xl
                p-6
                border
                border-pink-500/30
                hover:border-pink-400
                transition
              "
            >
              <h3 className="text-2xl font-semibold">
                {skill.name}
              </h3>

              <p className="text-pink-400 mt-2">
                {skill.level}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;