import React from "react";
import { CiMapPin, CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  return (
    <div className={styles["contact-info"]}>
      <div className={styles["contact-info-item"]}>
        <div className={styles["icon"]}>
          <CiMapPin />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Address</h4>
          <p className={styles["body"]}>Dhule,India</p>
        </div>
      </div>
      <div className={styles["contact-info-item"]}>
        <div className={styles["icon"]}>
          <CiMail />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Email</h4>
          <p className={styles["body"]}>deepakpatil2612@gmail.com</p>
        </div>
      </div>

      <div className={styles["contact-info-item"]}>
        <div className={styles["icon"]}>
          <CiPhone />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Contact No.</h4>
          <p className={styles["body"]}>+91 8805991606</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
