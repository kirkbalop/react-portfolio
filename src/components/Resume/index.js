import React from "react";

function Resume() {
  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Resume</h1>
      </div>
      <div className="bottom-spacing">
        <a
          href={
            process.env.PUBLIC_URL + `/assets/files/Kirk-Balopoulos-Resume.pdf`
          }
          download
        >
          <h4>Download my Resume</h4>
        </a>
      </div>
      <div className="Lmargin">
        <h5>Front-End Proficiencies</h5>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Bootstrap/Bulma</li>
          <li>React</li>
          <li>Git/Version Control</li>
          <li>Mobile-First/Responsive design</li>
        </ul>
        <br></br>
        <h5>Back-End Proficiencies</h5>
        <ul>
          <li>API</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Model View Controller paradigm (MVC)</li>
          <li>REST</li>
          <li>Progressive Web Applications (PWA)</li>
        </ul>
        <br></br>
        <h5>Dev Tool Proficiencies</h5>
        <ul>
          <li>Git</li>
          <li>npm</li>
          <li>Jest</li>
          <li>Webpack</li>
        </ul>
        <br></br>
        <h5>Database Proficiencies</h5>
        <ul>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>NoSQL</li>
          <li>SQLite</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
