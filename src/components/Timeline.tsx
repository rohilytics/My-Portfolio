import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="04/2024 - 08/2024"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Working Student – Data Analyst - Equity
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Universität Koblenz - Koblenz, Germany
            </h5>
            <p>
              Data Collection, Data Cleaning and Preparation, Exploratory Data
              Analysis, Statistical Measurement, Visualization and Reporting,
              Insights and Decision Support
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="04/2021 – 05/2022"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst</h3>
            <h5 className="vertical-timeline-element-subtitle">
              Zymr, Inc. - Pune, India
            </h5>
            <p>
              Data extraction, cleaning, SQL, Python (Pandas), Tableau
              dashboards, anomaly detection, trend analysis, workflow
              optimization, real-time analytics.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="09/2020 – 02/2021"
            iconStyle={{ background: "#235789", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Science Intern
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              Zymr, Inc. - Pune, India
            </h5>
            <p>
              User engagement analysis, A/B testing, retention improvement, user
              journey analysis, UX optimization.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
