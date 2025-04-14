import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "I'm",
    description: (
      <div className="landing">
        <a href="/docs/intro" target="_self">
          <img
            src={require("@site/static/img/sketchbook.png").default}
            alt="Sketchbook"
          />
        </a>
        <p>Hybrid professional, blending art and coding. I constantly bridge the gap between design and technology.</p>
      </div>
    ),
  },
  {
    title: "Creative",
    description: (
      <div className="landing">
        <a href="/gallery" target="_self">  
          <img
            src={require("@site/static/img/ok.png").default}
            alt="Sketchbook"
          />
        </a>
          <p>Developing handcrafted or digital projects rooted in research, with a focus on promoting art and cultural growth.</p>
      </div>
    ),
  },
  {
    title: "Coder",
    description: (
      <div className="landing">
        <a href="https://github.com/jcarroyos" target="_blank">
          <img
            src={require("@site/static/img/idea.png").default}
            alt="Sketchbook"
          />
        </a>
        <p>Web Development, dataviz, infographics, virtual environments, and information technologies.</p>
      </div>
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
