
import useScrollReveal from "../hooks/useScrollReveal";

function About() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="about" className="reveal px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent sm:text-sm">GET TO KNOW ME</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-accent/30 via-accent to-accent/30" />
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              My Development Journey
            </h3>

            <p className="leading-8 text-muted">
              I'm Md Raihan Kabir, a Computer Science and Engineering
              student and aspiring Full-Stack Web Developer from
              Bangladesh. I enjoy building web applications that solve
              practical problems and provide a good user experience.
            </p>

            <p className="mt-4 leading-8 text-muted">
              I have worked with React, Next.js, TypeScript, Node.js,
              NestJS, and PostgreSQL to build projects such as a
              developer social platform, an event booking application,
              and an e-commerce platform.
            </p>

            <p className="mt-4 leading-8 text-muted">
              My goal is to keep improving my problem-solving skills,
              write clean code, and grow as a software engineer by
              working on real-world projects.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="lift-card rounded-xl border border-line bg-card p-6 transition duration-300 hover:border-accent/50">
              <h4 className="font-semibold text-accent">
                What I Enjoy
              </h4>
              <p className="mt-3 leading-7 text-muted">
                Building web applications, solving coding problems,
                and learning new technologies.
              </p>
            </div>

            <div className="lift-card rounded-xl border border-line bg-card p-6 transition duration-300 hover:border-accent/50">
              <h4 className="font-semibold text-accent">
                My Approach
              </h4>
              <p className="mt-3 leading-7 text-muted">
                Learning by building projects, debugging issues,
                and improving code step by step.
              </p>
            </div>

            <div className="lift-card rounded-xl border border-line bg-card p-6 transition duration-300 hover:border-accent/50 sm:col-span-2">
              <h4 className="font-semibold text-accent">
                Career Goal
              </h4>
              <p className="mt-3 leading-7 text-muted">
                To join a software development team where I can
                contribute, learn from experienced developers,
                and build useful products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
