import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              
              <p>
              Aspiring Web Developer with a foundation in Java, and web development, HTML, CSS, Javascript and React with tools VS Code, and Eclipse. I am currently pursuing my B. Tech in specilization of Computer Engineering from R. C. Patel Institute of Technoogy. Let’s connect
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
