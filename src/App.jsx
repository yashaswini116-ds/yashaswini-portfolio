
import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">YASHASWINI.S</a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">My Work</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="availability">
          <span className="dot"></span> Available to connect
        </span>
      </nav>

      <main id="home">

        {/* HERO SECTION */}
        <section className="hero">

          {/* ANIMATED HERO BACKGROUND */}
          <div className="hero-effects">
            <div className="orbital-system">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="orbit-core">
                <span>DATA</span>
              </div>
            </div>

            <div className="glow-orb glow-one"></div>
            <div className="glow-orb glow-two"></div>

            {Array.from({ length: 18 }, (_, i) => (
              <span key={i} className={`particle particle-${i + 1}`}></span>
            ))}
          </div>

          <div className="hero-orb" aria-hidden="true"></div>

          <p className="eyebrow">
            DATA ANALYTICS · BUSINESS INTELLIGENCE · DATA SCIENCE
          </p>

          <h1>
            Turning data<br />
            into <span>meaningful</span><br />
            stories.
          </h1>

          <div className="hero-bottom">
            <p>
              Hello, I'm Yashaswini.<br />
              A curious mind exploring the world of data,
              discovering patterns and creating meaningful insights.
            </p>

            <a href="#work" className="explore-button">
              EXPLORE MY WORK ↗
            </a>
          </div>

          <div className="hero-note">
            <span>BASED IN INDIA</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about" id="about">

          <p className="eyebrow">01 — A LITTLE ABOUT ME</p>

          <h2>
            Beyond the numbers,<br />
            there's always a <span>story.</span>
          </h2>

          <div className="about-content">

            <p className="about-text">
              A Computer Science and Engineering student specializing
              in Data Science, with a curiosity for uncovering patterns,
              understanding information and discovering the stories
              hidden within data.
            </p>

            <p className="about-text">
              With a growing interest in Data Analytics and Business
              Intelligence, the focus lies in exploring how mathematics,
              statistics and technology come together to transform raw
              data into meaningful insights.
            </p>

            <p className="about-text">
              Driven by analytical thinking and continuous learning,
              the journey involves exploring new tools, developing
              practical skills and working on projects that connect
              technical knowledge with real-world applications.
            </p>

            <p className="about-text">
              Beyond technical knowledge, the belief is simple:
              meaningful technology begins with asking the right
              questions and finding solutions that make a difference.
            </p>

            <h3 className="about-tagline">
              Curious by nature. Analytical by mindset. Always evolving.
            </h3>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills" id="skills">

          <p className="eyebrow">02 — WHAT I BRING</p>

          <h2>
            Skills & <span>expertise.</span>
          </h2>

          <p className="skills-intro">
            Combining analytical thinking, technical knowledge
            and a curiosity for solving real-world problems
            through data.
          </p>

          <div className="skills-grid">

            <div className="skill-card analytics-card">
              <span className="skill-number">01 / ANALYTICS</span>
              <h3>Data Analytics</h3>
              <p>
                Microsoft Excel · Data Analysis · Statistics · Data Cleaning
              </p>
            </div>

            <div className="skill-card programming-card">
              <span className="skill-number">02 / TECHNOLOGY</span>
              <h3>Programming</h3>
              <p>Python · SQL · C · Java</p>
            </div>

            <div className="skill-card visualization-card">
              <span className="skill-number">03 / VISUALIZATION</span>
              <h3>Data Visualization</h3>
              <p>Power BI · Dashboards · Charts · Data Storytelling</p>
            </div>

            <div className="skill-card foundations-card">
              <span className="skill-number">04 / FOUNDATIONS</span>
              <h3>Core Knowledge</h3>
              <p>DBMS · Data Science · Machine Learning Fundamentals</p>
            </div>

          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="work" id="work">

          <p className="eyebrow">03 — SELECTED WORK</p>

          <h2>
            Ideas into <span>reality.</span>
          </h2>

          <p className="work-intro">
            A collection of projects, experiments and explorations
            driven by curiosity and a passion for working with data.
          </p>

          <div className="projects-grid">

            {/* PROJECT 1 */}
            <div className="project-card ai-project">

              <span className="project-index">
                01 / AI & TECHNOLOGY
              </span>

              <div className="project-visual">
                <span>AI</span>
              </div>

              <h3>AI Resume Analyzer</h3>

              <p>
                An AI-powered application designed to analyze resumes
                and explore how intelligent tools can support the
                resume evaluation process.
              </p>

              <div className="project-tags">
                <span>Python</span>
                <span>Streamlit</span>
                <span>AI</span>
              </div>

              <span className="project-status">
                IN DEVELOPMENT
              </span>

            </div>

            {/* PROJECT 2 */}
            <div className="project-card sales-project">

              <span className="project-index">
                02 / DATA ANALYTICS
              </span>

              <div className="project-visual">
                <span>DATA</span>
              </div>

              <h3>Sales Data Analysis</h3>

              <p>
                An analytical exploration of sales data to identify
                trends, understand performance and discover
                meaningful business insights.
              </p>

              <div className="project-tags">
                <span>Excel</span>
                <span>Statistics</span>
                <span>Analytics</span>
              </div>

              <span className="project-status">
                PLANNED
              </span>

            </div>

            {/* PROJECT 3 */}
            <div className="project-card project-card-wide bi-project">

              <span className="project-index">
                03 / BUSINESS INTELLIGENCE
              </span>

              <div className="project-visual">
                <span>BI</span>
              </div>

              <h3>Business Intelligence Dashboard</h3>

              <p>
                An interactive dashboard concept to visualize
                business metrics, track performance and
                support data-driven decision-making.
              </p>

              <div className="project-tags">
                <span>Power BI</span>
                <span>Visualization</span>
                <span>Dashboards</span>
              </div>

              <span className="project-status">
                PLANNED
              </span>

            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact" id="contact">

          <p className="eyebrow">04 — LET'S CONNECT</p>

          <h2>
            Have something<br />
            in mind?
          </h2>

          <p>
            Let's connect and create something meaningful.
          </p>

          {/* GMAIL */}
          <a href="mailto:yashaswiniy481@gmail.com">
            SAY HELLO ↗
          </a>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a
              href="https://www.linkedin.com/in/yashaswini-803245332"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>

            <a
              href="https://github.com/yashaswini116-ds"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗
            </a>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <span>YASHASWINI.</span>
        <span>DESIGNED WITH CURIOSITY · © 2026</span>
      </footer>

    </div>
  )
}

export default App
