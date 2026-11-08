
function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-dvh items-center px-6 pb-16 pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Side: Introduction */}
        <div>
          <p className="hero-enter mb-4 font-medium text-accent" style={{ "--hero-delay": "60ms" }}>
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {/* <span className="hero-name-word">Md </span> */}
            <span className="hero-name-word">Raihan </span>
            <span className="hero-name-word">Kabir</span>
          </h1>

          <h2 className="hero-enter mt-4 text-2xl font-semibold text-soft sm:text-3xl" style={{ "--hero-delay": "430ms" }}>
            Full-Stack Web Developer
          </h2>

          <p className="hero-enter mt-6 max-w-xl leading-7 text-muted" style={{ "--hero-delay": "540ms" }}>
            I build responsive web applications using React,
            Next.js, Node.js, and modern web technologies.
            I enjoy solving problems and learning new things.
          </p>

          {/* Action Buttons */}
          <div className="hero-enter mt-8 flex flex-wrap gap-4" style={{ "--hero-delay": "650ms" }}>
            <a
              href="#projects"
              className="interactive-lift rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-gray-950 shadow-lg shadow-emerald-500/25 transition hover:bg-accent hover:shadow-emerald-500/40"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="interactive-lift rounded-lg border border-line-strong px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Md-Raihan-Kabir-Resume.pdf"
              className="interactive-lift rounded-lg border border-accent px-6 py-3 font-semibold text-accent transition hover:bg-accent hover:text-gray-950"
            >
              Download Resume ↓
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-enter mt-8 flex gap-5 text-sm text-muted" style={{ "--hero-delay": "760ms" }}>
            <a
              href="https://github.com/raihankabir1952"
              target="_blank"
              rel="noreferrer"
              className="interactive-lift transition hover:text-accent"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="interactive-lift transition hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Side: Profile Placeholder */}
        
<div className="hero-profile flex justify-center">
  <div className="profile-image h-64 w-64 overflow-hidden rounded-full border-2 border-accent/50 bg-accent/10 shadow-[0_0_60px_-15px_rgba(16,185,129,0.55)] sm:h-80 sm:w-80">
    <img
      src="/image/raihan.png"
      alt="Md Raihan Kabir"
      className="h-full w-full object-cover"
    />
  </div>
</div>

      </div>
    </section>
  );
}

export default Hero;
