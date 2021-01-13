import React, { useContext } from "react";

import { Grid } from "@material-ui/core";

import {
  MetaInfo,
  Input,
  MultipleSelect,
  AllOne,
  Left,
  Right,
} from "../components";

import { criteria, termins } from "../data";

import { HomeContext } from "../context/home";

import styles from "../styles/Home.module.css";

export default function Home() {
  const {
    setProgram,
    setPoints,
    setUniversity,
    setCriteria,
    setTermins,
  } = useContext(HomeContext);

  return (
    <>
      <MetaInfo title="Home" />
      <form>
        <Grid container>
          <Grid item lg={4} md={4} xs={6}>
            <Input
              label="Program name:"
              placeholder="free text"
              setFunc={setProgram}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <Input
              label="Your Grade:"
              placeholder="Enter Points"
              setFunc={setPoints}
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item lg={4} md={4} xs={6}>
            <AllOne label="University/College" />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect
              label="Criteria:"
              data={criteria}
              setFunc={setCriteria}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect
              label="Termin Selection:"
              data={termins}
              setFunc={setTermins}
            />
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
          <Left
            university="uni"
            city="city"
            edu_code="edu_code"
            edu_name="edu_name"
          />
        </Grid>
        <Grid item xs={6}>
          {Array(8)
            .fill({ cri: "cri", points: "points" })
            .map(({ cri, points }, i) => (
              <Right key={i} criteria={cri} points={points} />
            ))}
        </Grid>
      </Grid>
    </>
  );
}
