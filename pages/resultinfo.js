import React from "react";

import { MetaInfo } from "../components";

import styles from "../styles/resultInfo.module.css";

export default function ResultInfo() {
  return (
    <>
      <MetaInfo title="ResultInfo" />
      <div className={styles.result_info}>
        <div className={styles.txt}>
          <p>Information On University:</p>
          <p>Text</p>
        </div>
        <div className={styles.txt}>
          <p>Information On City:</p>
          <p>Text</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className={styles.txt}>
            <p>Housing Data Index:</p>
            <p>Text</p>
          </div>
          <div className={styles.txt}>
            <p>Cost of Living Index:</p>
            <p>Text</p>
          </div>
        </div>
      </div>
    </>
  );
}
