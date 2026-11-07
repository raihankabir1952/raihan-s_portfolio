
import useScrollReveal from "../hooks/useScrollReveal";

const experiences = [
  {
    role: "Jr. Technology & Digital Coordination Associate",
    company: "Through Limited",
    period: "Feb 2025 – May 2025",
    type: "Internship · 3 Months",
    responsibilities: [
      "Reviewed Figma screens and provided frontend design feedback.",
      "Communicated UI improvement notes to designers.",
      "Checked project flows and helped identify UI inconsistencies.",
      "Collaborated with team members to improve the overall user experience.",
    ],
  },
];

function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="experience" className="reveal px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent sm:text-sm">
            MY PROFESSIONAL JOURNEY
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-accent/30 via-accent to-accent/30" />
        </div>

        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="lift-card rounded-xl border border-line bg-card p-6 transition duration-300 hover:border-accent/50 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {experience.role}
                </h3>

                <p className="mt-2 text-lg text-accent">
                  {experience.company}
                </p>

                <p className="mt-2 text-sm text-muted">
                  {experience.type}
                </p>
              </div>

              <span className="w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                {experience.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-7 text-muted"
                >
                  <span className="text-accent">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
