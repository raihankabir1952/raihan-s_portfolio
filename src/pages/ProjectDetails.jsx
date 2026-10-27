
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-gray-950 px-6 py-24 text-white">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Link to="/" className="interactive-lift mt-6 inline-block text-emerald-400">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="interactive-lift text-emerald-400 hover:text-emerald-300"
        >
          ← Back to Home
        </Link>

        <p className="mt-10 text-emerald-400">{project.category}</p>

        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
          {project.name}
        </h1>

        <p className="mt-6 leading-8 text-gray-400">
          {project.description}
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Technology Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Key Features</h2>
          <ul className="mt-4 space-y-3 text-gray-400">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Challenges</h2>
          <p className="mt-4 leading-8 text-gray-400">
            {project.challenges}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Future Improvements</h2>
          <p className="mt-4 leading-8 text-gray-400">
            {project.improvements}
          </p>
        </section>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="interactive-lift rounded-lg border border-gray-600 px-5 py-3 hover:border-emerald-400"
          >
            GitHub Repository ↗
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="interactive-lift rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-gray-950 hover:bg-emerald-400"
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
