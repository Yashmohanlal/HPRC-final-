const { useEffect, useMemo, useState } = React;

const company = {
  phone: "+27 79 872 1793",
  email: "info@hprconsulting.co.za",
  location: "Umhlanga, Durban, KwaZulu Natal",
  hours: "Mon-Fri: 8am - 7pm, Sat-Sun: Off",
};

const services = [
  {
    title: "Product Registration",
    text: "Product registration with the South African Health Products Regulatory Authority.",
    icon: "M9 4h6l3 3v12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V7l3-3Zm0 0v4h6V4M9 14h6M9 18h4",
  },
  {
    title: "ISO Accreditation",
    text: "GAP analysis, SOP formulation, ISO implementation, quality manuals, site master files, and accreditation documentation.",
    icon: "M12 3l7 4v5c0 4.8-2.8 8.1-7 9-4.2-.9-7-4.2-7-9V7l7-4Zm-3 9 2 2 4-5",
  },
  {
    title: "Health Product Guidance",
    text: "Guidance for registration and marketing of new health products in South Africa.",
    icon: "M12 5v14M5 12h14M7 7l10 10M17 7 7 17",
  },
  {
    title: "Company Licence Registration",
    text: "Company licence registration with SAHPRA or SA Radiation at the Department of Health.",
    icon: "M5 21V5a2 2 0 0 1 2-2h8l4 4v14M9 13h6M9 17h6M15 3v5h5",
  },
  {
    title: "Regulatory Advice",
    text: "Practical advice on regulatory frameworks for pharmaceutical and medical companies.",
    icon: "M12 3a7 7 0 0 0-4 12.7V20h8v-4.3A7 7 0 0 0 12 3Zm-3 18h6M9 12h6",
  },
];

const processSteps = [
  "Audit your current regulatory position",
  "Map documentation and licence requirements",
  "Prepare submissions, SOPs, manuals, and quality files",
  "Support regulator readiness and ongoing compliance",
];

const faqs = [
  {
    question:
      "Where does my company fall into the medical device establishment structure with the regulator?",
    answer:
      "If you manufacture, import, export, distribute, or wholesale medical devices, you must be regulated according to South African regulations.",
  },
  {
    question:
      "How do I become compliant with government requirements to legally sell medicines?",
    answer:
      "You will need to attain a licence, undergo inspections, and implement compliance standards. HPRC assists with documentation and provides guidance on pharmaceutical compliance for sale in South Africa.",
  },
  {
    question:
      "What standards do I have to comply with to sell pharmaceuticals or medical devices in South Africa?",
    answer:
      "You will need to comply with pharmaceutical practices such as GMP, GWP, and GCP, plus regulatory standards set by the regulator. For medical devices, ISO 13485:2016 and good wholesaling practices are required.",
  },
  {
    question: "Is my medical device establishment required to employ a pharmacist?",
    answer:
      "Medical device establishments must have an authorised representative who is a natural legal person responsible for the device on the market. The person should understand the devices and be accountable for them in the country, but does not have to be a qualified pharmacist.",
  },
  {
    question: "How do I report an adverse event or incident to SAHPRA?",
    answer:
      "SAHPRA has a pharmacovigilance unit that oversees adverse event and incident reporting. Recommended documents must be completed and submitted once the event or incident is identified.",
  },
];

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

function LogoMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <path className="logo-shield" d="M24 4 40 10v12c0 10.8-6.6 17.7-16 22C14.6 39.7 8 32.8 8 22V10L24 4Z" />
        <path className="logo-leaf" d="M24 31c-4.8-2.3-7.5-6.2-7.5-11.4 4.7.2 8.1 2.4 9.9 6.8 2.5-4.9 5.4-8 9.1-9.6-.4 7.1-4.2 12.1-11.5 14.2Z" />
        <path className="logo-line" d="M24 17v18" />
      </svg>
    </span>
  );
}

function Brand({ onClick }) {
  return (
    <a className="brand" href="#home" onClick={onClick}>
      <LogoMark />
      <span className="brand-text">
        <strong>HPRC</strong>
        <span>Health Products Regulatory Consulting</span>
      </span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="topbar-meta">
            <span>
              Call <strong>{company.phone}</strong>
            </span>
            <span>{company.location}</span>
          </div>
          <div className="topbar-links">
            <span>{company.hours}</span>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
      </div>
      <header className="navbar">
        <div className="container nav-inner">
          <Brand onClick={closeMenu} />

          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main menu">
            {["Home", "About", "Services", "Resources", "FAQs", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-primary" href="#contact">
              Appointment
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span className="menu-lines" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">Expertise - Compliance - Safer Health</span>
          <h1>Safe, affordable health products for South Africa.</h1>
          <p>
            Expert regulatory consulting for medical, pharmaceutical, and health
            product companies. HPRC helps you navigate compliance, approvals, and
            market access with clarity.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <a className="btn btn-secondary" href="#services">
              Our services
            </a>
          </div>
        </div>
        <div className="hero-visual reveal tilt" aria-label="Health products regulatory visual">
          <div className="hero-photo">
            <img
              src="./assets/qc-machinery.png"
              alt="Automated pharmaceutical quality control machinery"
            />
          </div>
          <div className="floating-chip chip-top">
            <span>SAHPRA</span>
            Registration support
          </div>
          <div className="floating-chip chip-bottom">
            <span>ISO 13485</span>
            Medical device readiness
          </div>
          <div className="orbit-ring">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="hero-strip">
        <div className="container">
          <div className="strip-item tilt">
            <strong>SAHPRA compliance</strong>
            <span>Registration, licensing, and regulator guidance.</span>
          </div>
          <div className="strip-item tilt">
            <strong>ISO support</strong>
            <span>ISO 9001 and ISO 13485 implementation documents.</span>
          </div>
          <div className="strip-item tilt">
            <strong>Qualified pharmacist led</strong>
            <span>Regulatory experience across medical device oversight.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="container intro-grid">
        <div className="split-copy reveal">
          <span className="eyebrow">About HPRC</span>
          <h2>Practical regulatory insight for a complex market.</h2>
          <p>
            Health Products Regulatory Consulting was formed to assist medical and
            pharmaceutical companies in registering with statutory bodies in South
            Africa. The company is run by a qualified pharmacist with experience
            in the pharmaceutical regulatory industry, including exposure to
            SAHPRA inspectorate and law enforcement work during 2017-2018.
          </p>
          <p>
            HPRC aims to ensure medical companies in South Africa are compliant
            with regulators and guided toward international standards, including
            ISO 9001 and ISO 13485, through affordable consultation and industry
            support.
          </p>
          <div className="feature-list">
            <div className="feature-pill">Medical device licensing</div>
            <div className="feature-pill">Product registration</div>
            <div className="feature-pill">Guideline formulation</div>
            <div className="feature-pill">Regulatory pharmacy insight</div>
          </div>
        </div>
        <div className="media-stack reveal tilt">
          <div className="photo-main">
            <img
              src="./assets/production-line-products.png"
              alt="Pharmaceutical production line with medicine products"
            />
          </div>
          <div className="photo-card">
            <img
              src="./assets/registration-products.png"
              alt="Medicine packaging, vials, and registration documents"
            />
          </div>
          <div className="stat-float">
            <strong>10+</strong>
            <span>years of regulatory experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our services</span>
          <h2>Compliance work made clearer, faster, and easier to act on.</h2>
          <p>
            HPRC supports the documentation, standards, licensing, and regulator
            submissions that allow medical and pharmaceutical companies to trade
            legally and appropriately in South Africa.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal tilt" key={service.title}>
              <div className="service-top">
                <span className="service-icon">
                  <Icon path={service.icon} />
                </span>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="process" id="resources">
      <div className="container process-grid">
        <div className="process-art reveal tilt">
          <div className="process-image process-image-large">
            <img
              src="./assets/lab-samples.png"
              alt="Sterile pharmaceutical samples and laboratory instruments"
            />
          </div>
          <div className="process-spec-card">
            <strong>Regulator-ready</strong>
            <span>Files, licences, quality systems, and product pathways aligned before submission.</span>
          </div>
        </div>
        <div className="split-copy reveal">
          <span className="eyebrow">How HPRC helps</span>
          <h2>A cleaner route from uncertainty to regulator-ready.</h2>
          <p>
            The process is designed to be simple for busy teams: understand the
            product, identify the regulatory path, prepare the documents, and
            keep momentum through submission and inspection readiness.
          </p>
          <div className="timeline">
            {processSteps.map((step, index) => (
              <div className="timeline-item" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="banner">
      <div className="banner-grid">
        <div className="banner-image" aria-label="Regulatory science workspace">
          <div className="map-card tilt">
            <span>Access</span>
            Safer health products across South Africa
          </div>
        </div>
        <div className="banner-copy reveal">
          <span className="eyebrow">Vision and goal</span>
          <h2>Safe, affordable health products for South Africa.</h2>
          <p>
            HPRC envisions that all health products trading on the South African
            market are safe and affordable to citizens of the Republic. With
            strong regulatory oversight and practical company guidance, this goal
            becomes achievable for both industry and the public.
          </p>
          <div className="metrics">
            <div className="metric">
              <strong>500+</strong>
              <span>meetings</span>
            </div>
            <div className="metric">
              <strong>10k</strong>
              <span>cups of coffee</span>
            </div>
            <div className="metric">
              <strong>5</strong>
              <span>core services</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faqs">
      <div className="container faq-grid">
        <div className="section-head reveal">
          <span className="eyebrow">FAQs</span>
          <h2>Answers before the first call.</h2>
          <p>
            These are some of the regular questions HPRC receives. For company
            specific guidance, book an appointment and the team will help you map
            the best next step.
          </p>
        </div>
        <div className="faq-list reveal">
          {faqs.map((faq, index) => (
            <article className={`faq-item ${openIndex === index ? "open" : ""}`} key={faq.question}>
              <button
                className="faq-question"
                type="button"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                <span aria-hidden="true">{openIndex === index ? "-" : "+"}</span>
              </button>
              <div className="faq-answer">{faq.answer}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  const serviceOptions = useMemo(() => services.map((service) => service.title), []);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Appointment request from ${data.get("name")}`);
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Email: ${data.get("email")}`,
        `Company: ${data.get("company")}`,
        `Service: ${data.get("service")}`,
        `Preferred date: ${data.get("date")}`,
        "",
        `Message: ${data.get("message")}`,
      ].join("\n"),
    );

    setStatus("Opening your email app with the appointment details.");
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Book an appointment</span>
          <h2>Send the details, then let HPRC guide the compliance route.</h2>
          <p>
            Call if urgent, or use the form to prepare an email with your
            appointment details and regulatory needs.
          </p>
        </div>
        <div className="contact-grid">
          <aside className="contact-panel reveal tilt">
            <div className="contact-photo" aria-label="Healthcare consultation" />
            <div className="contact-details">
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <strong>Call us</strong>
                <span>{company.phone}</span>
              </a>
              <a href={`mailto:${company.email}`}>
                <strong>Email</strong>
                <span>{company.email}</span>
              </a>
              <div>
                <strong>Location</strong>
                <span>{company.location}</span>
              </div>
              <div>
                <strong>Hours</strong>
                <span>{company.hours}</span>
              </div>
            </div>
          </aside>
          <form className="form-panel reveal tilt" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name and surname</label>
                <input id="name" name="name" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" name="phone" autoComplete="tel" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" name="email" autoComplete="email" required />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" autoComplete="organization" />
              </div>
              <div className="field">
                <label htmlFor="service">Service needed</label>
                <select id="service" name="service">
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="date">Preferred date</label>
                <input id="date" name="date" type="date" />
              </div>
              <div className="field full">
                <label htmlFor="message">What should HPRC know?</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what you need to register, license, document, or prepare."
                  required
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">
              Prepare appointment email
            </button>
            <p className="form-status" role="status">
              {status}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Brand />
            <p>
              Qualified regulatory support for medical, pharmaceutical, and
              health product companies operating in South Africa.
            </p>
          </div>
          <div>
            <h3>Quick menu</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#faqs">FAQs</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Contact details</h3>
            <ul>
              <li>{company.phone}</li>
              <li>{company.location}</li>
              <li>{company.hours}</li>
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          2018 hprconsulting.co.za. Modernized concept for HPRC Consulting.
        </div>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".tilt"));
    const handleMove = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 6).toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
    };
    const reset = (event) => {
      event.currentTarget.style.setProperty("--tilt-x", "0deg");
      event.currentTarget.style.setProperty("--tilt-y", "0deg");
    };

    cards.forEach((card) => {
      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", reset);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("pointermove", handleMove);
        card.removeEventListener("pointerleave", reset);
      });
    };
  }, []);

  return (
    <main className="site">
      <Header />
      <Hero />
      <About />
      <Services />
      <Process />
      <Vision />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
