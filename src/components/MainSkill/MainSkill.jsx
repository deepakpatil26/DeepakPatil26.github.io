import React from "react";
import styles from "./MainSkill.module.css";
import SkillsDeepak from "../skills/Skills";

const MainSkill = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.heading}>
        {/* <h2 className={styles["title"]}>About Me</h2> */}
      </div>
      <div className={styles.container}>
        <SkillsDeepak />
      </div>
    </section>
  );
};

export default MainSkill;
