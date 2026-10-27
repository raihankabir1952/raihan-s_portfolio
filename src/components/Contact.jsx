
import useScrollReveal from "../hooks/useScrollReveal";

const contactInfo = [
  {
    label: "Email",
    value: "raihankabir1952@gmail.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "Phone",
    value: "01798546751",
    href: "",
  },
  {
    label: "GitHub",
    value: "github.com/raihankabir1952",
    href: "https://github.com/raihankabir1952",
  },
  {
    label: "LinkedIn",
    value: "Visit my LinkedIn profile",
    href: "https://www.linkedin.com/in/raihankabirbd/",
  },
];

function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section ref={sectionRef} id="contact" className="reveal px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-medium text-emerald-400">
            LET'S CONNECT
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Contact Me
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded bg-emerald-400" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            I'm open to entry-level software engineering and
            full-stack development opportunities. Feel free to
            contact me to discuss opportunities or projects.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactInfo.map((item, index) => (
            <div
              key={item.label}
              className="reveal-stagger-item rounded-xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/50"
              style={{ "--stagger-delay": `${index * 60}ms` }}
            >
              <h3 className="font-semibold text-emerald-400">
                {item.label}
              </h3>

              {item.href ? (
                <a
                  href={item.href}
                  target={
                    item.label === "Email" || item.label === "Phone"
                      ? undefined
                      : "_blank"
                  }
                  rel="noreferrer"
                  className="interactive-lift mt-3 inline-block break-all text-gray-300 transition hover:text-emerald-400"
                >
                  {item.value}
                </a>
              ) : (
                <p className="mt-3 text-gray-400">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
