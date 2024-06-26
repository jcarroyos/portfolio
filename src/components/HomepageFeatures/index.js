import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Profile",
    description: (
      <>
        <a href="https://github.com/jcarroyos" target="_blank">
          <img
            src={require("@site/static/img/sketchbook.png").default}
            alt="Sketchbook"
          />
        </a>
        Creative coder. I always carry a notebook to sketch information,
        diagrams, interfaces, etc.
      </>
    ),
  },
  {
    title: "Teaching",
    description: (
      <>
        <a href="https://github.com/jcarroyos-teaching" target="_blank">
          <img
            src={require("@site/static/img/idea.png").default}
            alt="Sketchbook"
          />
        </a>
        Data visualization, infographics, virtual environments, and information
        technologies mentor.
      </>
    ),
  },
  {
    title: "Initiatives",
    description: (
      <>
        <img
          src={require("@site/static/img/ok.png").default}
          alt="Sketchbook"
        />
        Willing to support causes through ideation of digital projects for
        social, cultural, and memorial development.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
