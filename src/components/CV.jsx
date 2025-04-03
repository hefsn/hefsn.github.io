import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <div className="test-banner">
        🔬 TEST CV TEMPLATE 🔬
      </div>
      
      <div className="cv-grid">
        {/* Left Column - Main Info */}
        <div className="cv-main">
          <header className="cv-header">
            <div className="profile-section">
              <div className="profile-image">
                <div className="image-placeholder">👤</div>
              </div>
              <div className="profile-info">
                <h1>John Doe</h1>
                <p className="title">Senior Software Engineer</p>
                <div className="contact-info">
                  <a href="mailto:john.doe@email.com" className="contact-item">
                    <span className="icon">📧</span>
                    <span>john.doe@email.com</span>
                  </a>
                  <a href="tel:+11234567890" className="contact-item">
                    <span className="icon">📱</span>
                    <span>(123) 456-7890</span>
                  </a>
                  <div className="contact-item">
                    <span className="icon">📍</span>
                    <span>San Francisco, CA</span>
                  </div>
                  <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <span className="icon">🔗</span>
                    <span>linkedin.com/in/johndoe</span>
                  </a>
                </div>
              </div>
            </div>
          </header>

          <section className="cv-section">
            <h2>About Me</h2>
            <p className="about-text">
              Experienced software engineer with 8+ years of expertise in full-stack development,
              specializing in React, Node.js, and cloud technologies. Passionate about creating
              scalable solutions and mentoring junior developers.
            </p>
          </section>

          <section className="cv-section">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2020 - Present</div>
                <div className="timeline-content">
                  <h3>Senior Software Engineer</h3>
                  <p className="company">Tech Corp Inc.</p>
                  <ul>
                    <li>Led development of microservices architecture serving 1M+ users</li>
                    <li>Mentored team of 5 junior developers</li>
                    <li>Reduced system response time by 40% through optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column - Skills & Education */}
        <div className="cv-sidebar">
          <section className="cv-section">
            <h2>Skills</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML/CSS</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Others</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                </div>
              </div>
            </div>
          </section>

          <section className="cv-section">
            <h2>Education</h2>
            <div className="education-item">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">University of Technology</p>
              <p className="date">2012 - 2016</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV; 