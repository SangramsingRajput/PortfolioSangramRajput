import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sangram Rajput</h1>
        <p className={styles.description}>
        I have a passion for coding and love to code. I have a basic knowledge of Java , C Programming and MERN Stack development.
        </p>
        <a href="mailto:sangramrajput312@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
