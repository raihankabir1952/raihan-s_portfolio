
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
          <p className="font-medium text-emerald-400">
            MY PROFESSIONAL JOURNEY
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Experience
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-emerald-400" />
        </div>

        {experiences.map((experience) => (
          <div
            key={experience.company}
            className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">
                  {experience.role}
                </h3>

                <p className="mt-2 text-lg text-emerald-400">
                  {experience.company}
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  {experience.type}
                </p>
              </div>

              <span className="w-fit rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-400">
                {experience.period}
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 leading-7 text-gray-400"
                >
                  <span className="text-emerald-400">✓</span>
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
