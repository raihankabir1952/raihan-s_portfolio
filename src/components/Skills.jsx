
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
          <p className="text-xs font-semibold tracking-[0.18em] text-accent sm:text-sm">
            WHAT I WORK WITH
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical Skills
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-accent/30 via-accent to-accent/30" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.title}
              className="lift-card reveal-stagger-item rounded-xl border border-line bg-card p-6 hover:border-accent/50"
              style={{ "--stagger-delay": `${groupIndex * 70}ms` }}
            >
              <h3 className="mb-5 text-xl font-semibold text-accent">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="reveal-stagger-item rounded-lg border border-line bg-chip px-4 py-2 text-sm text-soft transition hover:border-accent hover:text-accent"
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
