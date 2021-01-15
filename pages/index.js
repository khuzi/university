import React, { useEffect, useState } from "react";

import { Grid } from "@material-ui/core";

import {
  MetaInfo,
  Input,
  MultipleSelect,
  Left,
  Right,
  SingleSelect,
} from "../components";

import { criteria as cri_dropdown, termins as termin_dropdown } from "../data";

import { fetch_result } from "../queries";

import styles from "../styles/Home.module.css";

export default function Home({ all_unis }) {
  const [city, setCity] = useState();
  const [program, setProgram] = useState();
  const [points, setPoints] = useState();
  const [uni, setUni] = useState([]);
  const [criteria, setCriteria] = useState();
  const [termins, setTermins] = useState();
  const [unis, setUnis] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    addAllUnis();
  }, []);

  const addAllUnis = () => {
    const allUniversities = all_unis.map((item, i) => {
      if (i === 0) {
        return {
          label: "All Universities",
          value: "allUnis",
        };
      } else {
        return {
          label: item["School Name"],
          value: item["School Name"],
        };
      }
    });
    setUnis(allUniversities);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!points) {
      fetch_result(
        criteria,
        program,
        points,
        uni,
        termins,
        "points_left",
        setResult
      );
    } else if (!criteria) {
      fetch_result(
        criteria,
        program,
        points,
        uni,
        termins,
        "criteria_left",
        setResult
      );
    } else if (uni === "allUnis") {
      fetch_result(
        criteria,
        program,
        points,
        uni,
        termins,
        "all_unis",
        setResult
      );
    } else if (termins.length === 2) {
      fetch_result(
        criteria,
        program,
        points,
        uni,
        termins,
        "all_termins",
        setResult
      );
    } else {
      fetch_result(
        criteria,
        program,
        points,
        uni,
        termins,
        "all_param",
        setResult
      );
    }
  };

  useEffect(() => {
    console.log("Result = ", result);
  }, [result]);

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
            <SingleSelect
              label="University:"
              data={unis}
              placeholder="Select University"
              mainData={all_unis}
              setCity={setCity}
              setUni={setUni}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect
              label="Criteria:"
              data={cri_dropdown}
              setFunc={setCriteria}
              placeholder="Enter Criteria"
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect
              label="Termin Selection:"
              data={termin_dropdown}
              setFunc={setTermins}
              placeholder="Enter Termin"
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6} className={styles.submit}>
            <input type="submit" onClick={(e) => onSubmitHandler(e)} />
          </Grid>
          <Grid item xs={6} className={styles.clear}>
            <input type="reset" />
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

export async function getStaticProps() {
  const res = await fetch(
    "https://arvin-project.herokuapp.com/api/v1/resources/university?univer=all"
  );
  const data = await res.json();

  return {
    props: {
      all_unis: data,
    },
  };
}
