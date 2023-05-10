import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div className={styles.timeline_icon}>
          <FaGraduationCap />
        </div>

        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>Masai School,Bangalore</h4>
            <p className={styles.timeline_date}>March 2022-present</p>
            <p className={styles.timeline_desc}>Full-Stack web Devlopment</p>
          </div>

          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              SavitriBai Phule Pune University,Pune
            </h4>
            <p className={styles.timeline_date}>2017-2021</p>
            <p className={styles.timeline_desc}>
              Bachelor of Engineering(Mech.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
