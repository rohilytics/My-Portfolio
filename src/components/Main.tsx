import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQGgx8u4pEsrbA/profile-displayphoto-shrink_800_800/B4EZaGGGdEHIAc-/0/1746006468997?e=1751500800&v=beta&t=QvtdPjUTFGeWUcKjJWY7fGEIc7YiuZa5-dhBzaIn7PM"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/rohilytics"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rohilmogal/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Rohil Mogal</h1>
          <p>Data Analyst</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/rohilytics"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/rohilmogal/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
