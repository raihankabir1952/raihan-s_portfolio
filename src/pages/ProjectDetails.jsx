
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";
import ThemeToggle from "../components/ThemeToggle";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-dvh px-6 py-24 text-heading">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">Project Not Found</h1>
            <Link to="/" className="interactive-lift mt-6 inline-block text-accent">
              ← Back to Home
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh px-6 py-24 text-heading">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="interactive-lift text-accent transition hover:underline underline-offset-4"
          >
            ← Back to Home
          </Link>
          <ThemeToggle />
        </div>

        <p className="mt-10 text-accent">{project.category}</p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>

        <p className="mt-6 leading-8 text-muted">
          {project.description}
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Technology Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-line bg-card px-4 py-2 text-sm text-soft"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="text-accent">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Challenges</h2>
          <p className="mt-4 leading-8 text-muted">
            {project.challenges}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>
          <p className="mt-4 leading-8 text-muted">
            {project.improvements}
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="interactive-lift rounded-lg border border-line-strong px-5 py-3 hover:border-accent"
          >
            GitHub Repository ↗
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="interactive-lift rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-gray-950 hover:bg-accent"
            >
              Live Project ↗
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
