
import { useState } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    function closeMenu() {
        setIsOpen(false);
    }

    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-950/90 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="interactive-lift text-xl font-bold text-emerald-400"
                >
                    Raihan<span className="text-white">.dev</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-5 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="interactive-lift nav-link text-sm text-gray-300 transition hover:text-emerald-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* Desktop Hire Me */}
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="interactive-lift hire-me-attention relative isolate hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-gray-950 sm:inline-flex"
                    >
                        <span>Hire Me ↗</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={
                            isOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isOpen}
                        className="interactive-lift flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-2xl text-white transition hover:border-emerald-400 lg:hidden"
                    >
                        {isOpen ? "×" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-white/10 bg-gray-950 px-6 py-4 lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={closeMenu}
                                className="interactive-lift nav-link rounded-lg px-3 py-3 text-gray-300 transition hover:bg-white/5 hover:text-emerald-400"
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Mobile Hire Me */}
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="interactive-lift hire-me-attention relative isolate mt-2 inline-flex justify-center rounded-lg bg-emerald-500 px-4 py-3 text-center font-semibold text-gray-950 sm:hidden"
                        >
                            <span>Hire Me ↗</span>
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
