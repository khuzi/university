import React from "react";
import styles from "../styles/Home.module.css";

import { Grid } from "@material-ui/core";

import {
  MetaInfo,
  Input,
  MultipleSelect,
  SingleSelect,
  AllOne,
} from "../components";

export default function Home() {
  return (
    <>
      <MetaInfo title="Home" />
      <form>
        <Grid container>
          <Grid item lg={4} md={4} xs={6}>
            <Input label="Program name:" placeholder="free text" />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <Input label="Your Grade:" placeholder="Enter Points" />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item lg={4} md={4} xs={6}>
            <AllOne label="University/College" />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect label="Criteria:" />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <SingleSelect label="Termin Selection:" />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6} className={styles.submit}>
            <input type="submit" />
          </Grid>
          <Grid item xs={6} className={styles.clear}>
            <button>Clear Form</button>
          </Grid>
        </Grid>
      </form>
      <div className={styles.divider} />
      <Grid container className={styles.result_box}>
        <Grid item xs={6}>
          <div className={styles.left}>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                University:
              </Grid>
              <Grid item xs={6}>
                xxxxxxxx
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                City:
              </Grid>
              <Grid item xs={6}>
                xxxxxxxx
              </Grid>
            </Grid>
          </div>
          <div className={styles.left}>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                Education Name:
              </Grid>
              <Grid item xs={6}>
                xxxxxxxx
              </Grid>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={6}>
                Education Code:
              </Grid>
              <Grid item xs={6}>
                xxxxxxxx
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid container item xs={6} justify="space-around">
              <p>Criteria:</p>
              <p>xxxxx</p>
            </Grid>
            <Grid container item xs={6} justify="space-around">
              <p>Require Points:</p>
              <p>xxxxx</p>
            </Grid>
          </Grid>
          <Grid container>
            <Grid container item xs={6} justify="space-around">
              <p>Criteria:</p>
              <p>xxxxx</p>
            </Grid>
            <Grid container item xs={6} justify="space-around">
              <p>Require Points:</p>
              <p>xxxxx</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
