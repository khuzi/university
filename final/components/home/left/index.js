import React from "react";

import { Grid } from "@material-ui/core";

import styles from "./left.module.css";

const LeftBox = ({ txt1, txt2 }) => {
  return (
    <Grid container item xs={12} style={{ margin: "0.38rem 0" }}>
      <Grid item xs={6}>
        {txt1}:
      </Grid>
      <Grid item xs={6}>
        {txt2}
      </Grid>
    </Grid>
  );
};

export function Left({ university, city, edu_name, edu_code }) {
  return (
    <>
      <div className={styles.left_box}>
        {["University", "City"].map((txt, i) => (
          <LeftBox key={i} txt1={txt} txt2={i === 0 ? university : city} />
        ))}
      </div>
      <div className={styles.left_box}>
        {["Education Name", "Education Code"].map((txt, i) => (
          <LeftBox key={i} txt1={txt} txt2={i === 0 ? edu_name : edu_code} />
        ))}
      </div>
    </>
  );
}
