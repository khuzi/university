import React from "react";

import { MetaInfo } from "../components";

import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <>
      <MetaInfo title="Contact" />
      <form>
        <div className={styles.form_field}>
          <label>Name</label>
          <input name="name" type="text" placeholder="Enter Name" required />
        </div>
        <div className={styles.form_field}>
          <label>Email</label>
          <input name="email" type="email" placeholder="Enter Email" required />
        </div>
        <div className={styles.form_field}>
          <label>Message</label>
          <textarea />
        </div>
        <div className={styles.submit}>
          <input type="submit" />
        </div>
      </form>
    </>
  );
}
