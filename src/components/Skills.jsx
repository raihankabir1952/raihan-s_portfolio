
import useScrollReveal from "../hooks/useScrollReveal";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST API", "JWT Authentication"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma", "TypeORM"],
  },
  {
    title: "Tools & Services",
    skills: ["Git", "GitHub", "Postman", "Cloudinary", "Vercel"],
  },
];

function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="skills" className="reveal px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-medium text-emerald-400">
            WHAT I WORK WITH
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technical Skills
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-emerald-400" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="reveal-stagger-item rounded-xl border border-white/10 bg-white/5 p-6"
              style={{ "--stagger-delay": `${groupIndex * 70}ms` }}
            >
              <h3 className="mb-5 text-xl font-semibold text-emerald-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="reveal-stagger-item rounded-lg border border-white/10 bg-gray-900 px-4 py-2 text-sm text-gray-300 transition hover:border-emerald-400 hover:text-emerald-400"
                    style={{
                      "--stagger-delay": `${Math.min(skillIndex, 4) * 45}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
