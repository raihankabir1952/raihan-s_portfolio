
function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center px-6 pb-16 pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Side: Introduction */}
        <div>
          <p className="hero-enter mb-4 font-medium text-emerald-400" style={{ "--hero-delay": "60ms" }}>
            Hello, I'm
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="hero-name-word">Md </span>
            <span className="hero-name-word">Raihan </span>
            <span className="hero-name-word">Kabir</span>
          </h1>

          <h2 className="hero-enter mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl" style={{ "--hero-delay": "430ms" }}>
            Full-Stack Web Developer
          </h2>

          <p className="hero-enter mt-6 max-w-xl leading-7 text-gray-400" style={{ "--hero-delay": "540ms" }}>
            I build responsive web applications using React,
            Next.js, Node.js, and modern web technologies.
            I enjoy solving problems and learning new things.
          </p>

          {/* Action Buttons */}
          <div className="hero-enter mt-8 flex flex-wrap gap-4" style={{ "--hero-delay": "650ms" }}>
            <a
              href="#projects"
              className="interactive-lift rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-gray-950 transition hover:bg-emerald-400"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="interactive-lift rounded-lg border border-gray-600 px-6 py-3 font-semibold transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Md-Raihan-Kabir-Resume.pdf"
              className="interactive-lift rounded-lg border border-emerald-400 px-6 py-3 font-semibold text-emerald-400 transition hover:bg-emerald-400 hover:text-gray-950"
            >
              Download Resume ↓
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-enter mt-8 flex gap-5 text-sm text-gray-400" style={{ "--hero-delay": "760ms" }}>
            <a
              href="https://github.com/raihankabir1952"
              target="_blank"
              rel="noreferrer"
              className="interactive-lift transition hover:text-emerald-400"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="interactive-lift transition hover:text-emerald-400"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* Right Side: Profile Placeholder */}
        
<div className="hero-profile flex justify-center">
  <div className="profile-image h-64 w-64 overflow-hidden rounded-full border-2 border-emerald-400/50 bg-emerald-400/10 sm:h-80 sm:w-80">
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
