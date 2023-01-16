import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi,My Name is Hemanth</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating. </p>
          <GitHubIcon />
          <EmailIcon />
          <LinkedInIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Angular, Redux, HTML, CSS,NPM, BootStrap, MaterialUI,
              TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS,MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript,TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
