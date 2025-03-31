import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <div className="test-banner">
        🔬 TEST CV TEMPLATE 🔬
      </div>
      <header className="cv-header">
        <h1>John Doe</h1>
        <p className="title">Senior Software Engineer</p>
        <div className="contact-info">
          <p>📧 john.doe@email.com</p>
          <p>📱 (123) 456-7890</p>
          <p>📍 San Francisco, CA</p>
          <p>🔗 linkedin.com/in/johndoe</p>
        </div>
      </header>

      <section className="cv-section">
        <h2>Summary</h2>
        <p>
          Experienced software engineer with 8+ years of expertise in full-stack development,
          specializing in React, Node.js, and cloud technologies. Passionate about creating
          scalable solutions and mentoring junior developers.
        </p>
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        <div className="experience-item">
          <div className="experience-header">
            <h3>Senior Software Engineer</h3>
            <p className="company">Tech Corp Inc.</p>
            <p className="date">2020 - Present</p>
          </div>
          <ul>
            <li>Led development of microservices architecture serving 1M+ users</li>
            <li>Mentored team of 5 junior developers</li>
            <li>Reduced system response time by 40% through optimization</li>
          </ul>
        </div>
      </section>

      <section className="cv-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
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
  );
};

export default CV; 