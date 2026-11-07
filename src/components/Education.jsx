
import useScrollReveal from "../hooks/useScrollReveal";

const educationList = [
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    period: "2022 – 2026",
    result: "Current CGPA: 3.57 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Carmichael College, Rangpur",
    period: "Completed",
    result: "GPA: 4.50",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Santahar B.P. High School",
    period: "Completed",
    result: "GPA: 5.00",
  },
];

function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="education" className="reveal px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent sm:text-sm">
            MY ACADEMIC BACKGROUND
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Education
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-accent/30 via-accent to-accent/30" />
        </div>

        <div className="space-y-6">
          {educationList.map((item, index) => (
            <div
              key={item.degree}
              className="lift-card reveal-stagger-item rounded-xl border border-line bg-card p-6 transition hover:border-accent/50"
              style={{ "--stagger-delay": `${index * 75}ms` }}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.degree}
                  </h3>

                  <p className="mt-2 text-accent">
                    {item.institution}
                  </p>
                </div>

                <span className="w-fit rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  {item.period}
                </span>
              </div>

              {item.result && (
                <p className="mt-4 text-sm text-muted">
                  {item.result}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
