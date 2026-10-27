
function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a
          href="#home"
          className="interactive-lift text-lg font-bold text-emerald-400"
        >
          Raihan<span className="text-white">.dev</span>
        </a>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Md Raihan Kabir. All rights reserved.
        </p>

        <a
          href="https://github.com/raihankabir1952"
          target="_blank"
          rel="noreferrer"
          className="interactive-lift text-sm text-gray-400 transition hover:text-emerald-400"
        >
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}

export default Footer;
