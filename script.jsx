
const { useState } = React;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const githubUrl = "https://github.com/keerthana1389-dot";
  const linkedInUrl = "https://www.linkedin.com/in/keerthana-lakshmi-a8a2a6325";
  const email = "keerthanal389@gmail.com";

  const navItems = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Certificates", "#certificates"],
    ["Contact", "#contact"]
  ];

  const skills = [
    "Python",
    "HTML",
    "CSS",
    "Microsoft Excel",
    "VS Code",
    "IDLE"
  ];

  const certificates = [
    "Agile Scrum Foundation",
    "Python for Beginners",
    "NPTEL Cloud Computing - Elite Certified",
    "Internship Training Programme - DTC Infotech",
    "Machine Learning Internship Training"
  ];

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          Keerthana<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navItems.map(([name, link]) => (
            <a
              href={link}
              key={name}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </nav>
      </header>

      {/* HOME */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            HELLO, WELCOME TO MY PORTFOLIO 👋
          </p>

          <h1>
            I'm <span>Keerthana N</span>
          </h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="hero-description">
            Passionate about technology, software development and artificial
            intelligence. I love creating meaningful digital solutions
            that make a difference.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              Explore My Work ↗
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <span className="linkedin-icon">in</span>
              LinkedIn ↗
            </a>

            <a href={`mailto:${email}`}>
              <span className="mail-icon">✉</span>
              Email ↗
            </a>

            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="github-icon">⌘</span>
              GitHub ↗
            </a>
          </div>
        </div>

        {/* PROFILE IMAGE AND DECORATION */}
        <div className="hero-visual">
          <div className="orbit orbit-outer"></div>
          <div className="orbit orbit-inner"></div>
          <div className="orbit orbit-main"></div>

          <div className="profile-circle">
            <img src="avatar.png" alt="Keerthana N" />
          </div>

          <div className="floating-label python-label">
            <span>💻</span> Python Developer
          </div>

          <div className="floating-label ai-label">
            <span>🤖</span> AI Enthusiast
          </div>

          <div className="floating-label creative-label">
            <span>💡</span> Creative Thinker
          </div>

          <span className="star star-one">✧</span>
          <span className="star star-two">✦</span>
          <span className="star star-three">✧</span>

          <span className="dot dot-one"></span>
          <span className="dot dot-two"></span>

          <span className="orbit-line line-left"></span>
          <span className="orbit-line line-right"></span>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>About <span>Me</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="about-card">
          <div className="about-image">
            <img src="avatar.png" alt="Keerthana" />
          </div>

          <div className="about-content">
            <span className="about-tag">WHO AM I?</span>
            <h3>Hello! I'm Keerthana N</h3>

            <p>
              I'm a Computer Science Engineering student at Aditya
              College of Engineering and Technology, with a strong
              interest in software development, artificial intelligence
              and emerging technologies.
            </p>

            <p>
              I enjoy exploring new technologies, learning programming
              and developing practical solutions. I am passionate about
              improving my technical knowledge, building creative
              projects and growing as a technology professional.
            </p>

            <div className="about-details">
              <div>
                <strong>Education</strong>
                <span>B.E. Computer Science Engineering</span>
              </div>

              <div>
                <strong>CGPA</strong>
                <span>8.47</span>
              </div>

              <div>
                <strong>Location</strong>
                <span>Yelahanka, Bengaluru</span>
              </div>

              <div>
                <strong>Interests</strong>
                <span>Programming, Web Development & AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section education-section" id="education">
        <div className="section-heading">
          <p>MY ACADEMIC JOURNEY</p>
          <h2>Education <span>Background</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="education-list">
          <article className="education-card">
            <div className="education-icon">🎓</div>
            <div>
              <span className="education-level">UNDERGRADUATE</span>
              <h3>Bachelor of Engineering (B.E.)</h3>
              <h4>Computer Science and Engineering</h4>
              <p>Aditya College of Engineering and Technology</p>
              <div className="education-meta">
                <span>August 2023 – Present</span>
                <span>CGPA: 8.47</span>
                <span>Bengaluru</span>
              </div>
            </div>
          </article>

          <article className="education-card">
            <div className="education-icon">📚</div>
            <div>
              <span className="education-level">PRE-UNIVERSITY</span>
              <h3>12th Standard (PUC)</h3>
              <p>Jnana Jyothi PU College</p>
              <div className="education-meta">
                <span>August 2021 – March 2023</span>
                <span>Bengaluru</span>
              </div>
            </div>
          </article>

          <article className="education-card">
            <div className="education-icon">🏫</div>
            <div>
              <span className="education-level">SECONDARY EDUCATION</span>
              <h3>10th Standard (SSLC)</h3>
              <p>St Alban's English High School</p>
              <div className="education-meta">
                <span>May 2020 – March 2021</span>
                <span>Bengaluru</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p>WHAT I WORK WITH</p>
          <h2>My <span>Skills</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill}>
              <span className="skill-number">0{index + 1}</span>
              <h3>{skill}</h3>
              <p>Learning and developing my practical skills.</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <p>WHAT I HAVE BUILT</p>
          <h2>Featured <span>Projects</span></h2>
          <div className="heading-line"></div>
        </div>

        {/* PROJECT 1: WOMEN SAFETY SOS */}
        <div className="project-card">
          <div className="project-visual">
            <div className="project-emoji">🛡️</div>
            <span>WOMEN SAFETY</span>
          </div>

          <div className="project-info">
            <span className="project-tag">
              MOBILE APPLICATION DEVELOPMENT
            </span>

            <h3>Women Safety SOS Application</h3>

            <p>
              A mobile application designed to enhance women's safety
              through one-tap SOS emergency alerts and real-time
              location sharing with pre-registered emergency contacts.
            </p>

            <ul>
              <li>One-tap SOS emergency alert.</li>
              <li>Real-time location sharing.</li>
              <li>GPS tracking and emergency calling.</li>
              <li>Quick notifications for faster assistance.</li>
            </ul>

            <div className="project-tech">
              <span>Mobile App</span>
              <span>GPS Tracking</span>
              <span>Emergency Alerts</span>
            </div>
          </div>
        </div>

        {/* PROJECT 2: ECOTRACK AI */}
        <div className="project-card">
          <div className="project-visual">
            <div className="project-emoji">🌱</div>
            <span>ECOTRACK AI</span>
          </div>

          <div className="project-info">
            <span className="project-tag">
              AI & SUSTAINABILITY
            </span>

            <h3>
              EcoTrack AI – Household Carbon Footprint Analyzer & Predictor
            </h3>

            <p>
              An AI-powered web application that helps households monitor,
              analyze and reduce their carbon footprint. It calculates
              emissions from everyday activities and provides useful
              sustainability insights.
            </p>

            <ul>
              <li>Calculate emissions from electricity, LPG, fuel, transport and waste.</li>
              <li>Visualize category-wise carbon dioxide emissions.</li>
              <li>Predict household carbon footprint using AI-based analysis.</li>
              <li>Provide personalized recommendations to reduce emissions.</li>
              <li>Track emission history, sustainability insights and risk assessment.</li>
            </ul>

            <div className="project-tech">
              <span>Artificial Intelligence</span>
              <span>Data Visualization</span>
              <span>Carbon Tracking</span>
              <span>Prediction</span>
            </div>

            <a
              className="project-github-link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="section certificates-section" id="certificates">
        <div className="section-heading">
          <p>MY LEARNING JOURNEY</p>
          <h2>Certificates <span>& Training</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={certificate}>
              <div className="certificate-icon">🏅</div>
              <div>
                <span>0{index + 1}</span>
                <h3>{certificate}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES AND INTERESTS */}
      <section className="section extra-section">
        <div className="extra-card">
          <h3>Languages</h3>
          <div className="tag-list">
            <span>English</span>
            <span>Kannada</span>
            <span>Telugu</span>
          </div>
        </div>

        <div className="extra-card">
          <h3>Interests</h3>
          <div className="tag-list">
            <span>Reading Books</span>
            <span>Learning New Technologies</span>
          </div>
        </div>

        <div className="extra-card">
          <h3>Soft Skills</h3>
          <div className="tag-list">
            <span>Communication</span>
            <span>Teamwork</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <p>LET'S CONNECT</p>
          <h2>Get In <span>Touch</span></h2>
          <div className="heading-line"></div>
        </div>

        <div className="contact-card">
          <h3>Have an opportunity or a project in mind?</h3>

          <p>
            Feel free to reach out. I would be happy to connect
            and learn about new opportunities.
          </p>

          <a
            className="btn primary-btn"
            href={`mailto:${email}`}
          >
            Send Me an Email ↗
          </a>

          <div className="contact-details">
            <p>✉ {email}</p>
            <p>☎ 7338158655</p>
            <p>📍 Yelahanka, Bengaluru</p>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile ↗
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="footer-brand">
          Keerthana<span>.</span>
        </a>

        <p>Designed with care by Keerthana N</p>
        <p>© {new Date().getFullYear()} Keerthana N. All rights reserved.</p>

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
