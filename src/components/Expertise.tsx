import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faPython } from "@fortawesome/free-brands-svg-icons";
import { faBarChart } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faCloud,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = ["Python", "SQL", "Microsoft Excel", "Pandas", "Numpy"];
const labelsSecond = ["Scikit-learn", "LLMs"];
const labelsThird = ["Tableau", "Power BI", "ggplot2", "Seaborn", "Matplotlib"];
const labelsFourth = ["MySQL", "PostgreSQL"];
const labelsFifth = [
  "Google Cloud Platform",
  "BigQuery",
  "Amazon AWS",
  "Git",
  "Docker",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertises</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faBarChart} size="3x" />
            <h3>Data Analytics</h3>
            <p>
              I have a strong foundation in data analysis, with experience in
              collecting, cleaning, and exploring datasets to uncover meaningful
              insights. Using tools like Python (Pandas, NumPy), SQL, and Excel,
              I focus on transforming raw data into clear narratives that
              support data-driven decisions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>AI & Machine Learning</h3>
            <p>
              I apply machine learning techniques to solve real-world problems,
              primarily using Scikit-learn. My experience includes building and
              evaluating models for classification, regression, and clustering
              tasks, with attention to both performance and interpretability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faChartSimple} size="3x" />
            <h3>Data Visualization</h3>
            <p>
              I design effective visualizations that communicate data insights
              clearly and efficiently. With tools like Tableau, Power BI, and
              Python libraries such as Matplotlib and Seaborn, I create visual
              narratives that help stakeholders understand trends, patterns, and
              outliers.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>SQL & Databases</h3>
            <p>
              I’ve worked with cloud platforms like Google Cloud Platform to
              handle large-scale data processing and analysis. I’m familiar with
              BigQuery, Cloud Functions, and building efficient data workflows
              in cloud environments to support scalable analytics solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFourth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud & Big Data Tools</h3>
            <p>
              SQL is a core part of my workflow. I write optimized queries to
              extract, join, and analyze data from relational databases such as
              MySQL and PostgreSQL, ensuring accuracy and performance in every
              step of the data pipeline.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFifth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
