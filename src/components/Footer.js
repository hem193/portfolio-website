import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "../styles/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GitHubIcon />
        <EmailIcon />
        <LinkedInIcon />
        <TwitterIcon />
      </div>
      <p>&copy; 2023 Hemanth.com</p>
    </div>
  );
}

export default Footer;
