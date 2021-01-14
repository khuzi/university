import React, { useEffect, useContext, useState } from "react";

import { Grid } from "@material-ui/core";

import {
  MetaInfo,
  Input,
  MultipleSelect,
  AllOne,
  Left,
  Right,
} from "../components";

import { criteria as static_cri, termins as static_termin } from "../data";

import {
  all_param_fetch,
  point_param_empty,
  criteria_param_empty,
  all_schools,
  all_termins,
} from "../queries";

import { HomeContext } from "../context/home";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [result, setResult] = useState([]);
  const {
    setProgram,
    setPoints,
    setCriteria,
    setTermins,
    setUniversity,
    university,
    program,
    points,
    criteria,
    termins,
    city,
  } = useContext(HomeContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      (program,
      criteria.length > 0,
      points,
      university,
      termins && university.length === 1)
    ) {
      all_param_fetch(
        criteria,
        program,
        points,
        university,
        termins,
        setResult
      );
    } else if (!termins && university.length === 1) {
      point_param_empty(criteria, program, university, termins, setResult);
    } else if (!criteria) {
      criteria_param_empty(
        city,
        program,
        points,
        university,
        termins,
        setResult
      );
    } else if (university.length === 38 && city === "Stockholm") {
      all_schools(city, criteria, program, points, termins, setResult);
    } else if (termins.length === 2 && university.length === 1) {
      all_termins(city, criteria, program, points, setResult);
    }
  };

  const onReset = () => {
    setProgram(null);
    setUniversity([]);
  };

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
              data={static_cri}
              setFunc={setCriteria}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect
              label="Termin Selection:"
              data={static_termin}
              setFunc={setTermins}
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6} className={styles.submit}>
            <input type="submit" onClick={(e) => onSubmit(e)} />
          </Grid>
          <Grid item xs={6} className={styles.clear}>
            <input type="reset" onClick={onReset} />
          </Grid>
        </Grid>
      </form>
      <div className={styles.divider} />
      {result.length > 0 && (
        <Grid container className={styles.result_box}>
          <Grid item xs={6}>
            <Left
              university={result[0].University}
              city={city}
              edu_code={result[0]["Program Code"]}
              edu_name={result[0].Program}
            />
          </Grid>
          <Grid item xs={6}>
            {result.map(({ Urvalgrupp, Points }, i) => (
              <Right key={i} criteria={Urvalgrupp} points={Points} />
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}
