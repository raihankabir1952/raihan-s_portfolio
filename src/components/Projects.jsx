import { Link } from "react-router-dom";
import projects from "../data/projects";
import useScrollReveal from "../hooks/useScrollReveal";

function Projects() {
    const sectionRef = useScrollReveal();
    const projectImages = {
        "event-booking": "/image/event-booking.png",
        "codesphere": "/image/codeSphere.png",
        "my-kart":"/image/my-kart.png",
        "togetherly": "/image/togetherly.png",
        "bazar-dor": "/image/bazar.png",
        fitlog: "/image/fitlog.png",
        "tech-explorer": "/image/tech-explorer.png",
    };

    return (
        <section ref={sectionRef} id="projects" className="reveal px-6 py-24">
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-12 text-center">
                    <p className="text-xs font-semibold tracking-[0.18em] text-accent sm:text-sm">
                        SOME THINGS I'VE BUILT
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Featured Projects
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-accent/30 via-accent to-accent/30" />
                </div>

                {/* Project Cards */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className="project-card reveal-stagger-item flex flex-col overflow-hidden rounded-xl border border-line bg-card hover:border-accent/50"
                            style={{
                                "--stagger-delay": `${Math.min(index, 4) * 70}ms`,
                            }}
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden bg-chip">
                                {projectImages[project.id] ? (
                                    <img
                                        src={projectImages[project.id]}
                                        alt={`${project.name} project screenshot`}
                                        className="project-image h-full w-full object-cover object-top"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-accent/20 to-chip">
                                        <span className="px-3 text-center text-3xl font-bold text-accent">
                                            {project.name}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Project Information */}
                            <div className="flex flex-1 flex-col p-6">
                                <p className="text-sm text-accent">
                                    {project.category}
                                </p>

                                <h3 className="mt-2 text-xl font-bold">
                                    {project.name}
                                </h3>

                                <p className="mt-3 flex-1 leading-7 text-muted">
                                    {project.description}
                                </p>

                                {/* Technology Stack */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md bg-chip px-2 py-1 text-xs text-soft"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="mt-6 flex flex-wrap items-center gap-4">
                                    {/* Existing projects with single GitHub repository */}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="interactive-lift text-sm font-medium text-soft transition hover:text-accent"
                                        >
                                            GitHub ↗
                                        </a>
                                    )}

                                    {/* Togetherly frontend repository */}
                                    {project.githubClient && (
                                        <a
                                            href={project.githubClient}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="interactive-lift text-sm font-medium text-soft transition hover:text-accent"
                                        >
                                            Frontend ↗
                                        </a>
                                    )}

                                    {/* Togetherly backend repository */}
                                    {project.githubServer && (
                                        <a
                                            href={project.githubServer}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="interactive-lift text-sm font-medium text-soft transition hover:text-accent"
                                        >
                                            Backend ↗
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="interactive-lift text-sm font-medium text-soft transition hover:text-accent"
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}
                                </div>

                                {/* Project Details */}
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="interactive-lift mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-accent"
                                >
                                    View Details →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
