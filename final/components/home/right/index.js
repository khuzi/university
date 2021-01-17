import React from "react";
import Link from "next/link";

import { Grid } from "@material-ui/core";

import styles from "./right.module.css";

export function Right({ criteria, points, city, program_code }) {
  return (
    <Link href={`/[code]`} as={`/${city}_${program_code}`}>
      <Grid container className={styles.right_box}>
        <Grid container item xs={6} justify="space-around">
          <p>Criteria:</p>
          <p>{criteria}</p>
        </Grid>
        <Grid container item xs={6} justify="space-around">
          <p>Require Points:</p>
          <p>{points}</p>
        </Grid>
      </Grid>
    </Link>
  );
}
