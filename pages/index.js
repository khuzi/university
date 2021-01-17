import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const router = useRouter();

  const [city, setCity] = useState();
  const [program, setProgram] = useState();
  const [points, setPoints] = useState();
  const [uni, setUni] = useState();
  const [criteria, setCriteria] = useState();
  const [termins, setTermins] = useState();
  const [unis, setUnis] = useState([]);
  const [result, setResult] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    addAllUnis();
    const { cl, prl, unil, terminl, pol } = localStorage;
    if (program || prl) {
      fetch_result(cl, prl, pol, unil, terminl, setResult, all_unis);
    }
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
    if (!program) {
      alert("Program Field is mandatory..");
    } else {
      fetch_result(
        criteria,
        program,
        points,
        uni,
        termins,
        setResult,
        all_unis
      );
    }
  };

  const onResetHandler = () => {
    setReset(true);
    setTimeout(() => {
      router.reload();
    }, 50);
  };

  return (
    <>
      <MetaInfo title="Home" />
      <form onSubmit={onSubmitHandler}>
        <Grid container>
          <Grid item lg={4} md={4} xs={6}>
            <Input
              label="Program name:"
              placeholder="free text"
              setFunc={setProgram}
              required
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <Input
              label="Your Grade:"
              placeholder="Enter Points"
              setFunc={setPoints}
              type="number"
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
              reset={reset}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect
              label="Criteria:"
              data={cri_dropdown}
              setFunc={setCriteria}
              placeholder="Enter Criteria"
              reset={reset}
            />
          </Grid>
          <Grid item lg={4} md={4} xs={6}>
            <MultipleSelect
              label="Termin Selection:"
              data={termin_dropdown}
              setFunc={setTermins}
              placeholder="Enter Termin"
              reset={reset}
            />
          </Grid>
        </Grid>
        <Grid container justify="center">
          <Grid item xs={6} className={styles.submit}>
            <input type="submit" onClick={(e) => onSubmitHandler(e)} />
          </Grid>
          <Grid item xs={6} className={styles.clear}>
            <input type="reset" onClick={onResetHandler} />
          </Grid>
        </Grid>
      </form>
      <div className={styles.divider} />
      {result.length > 0 && (
        <Grid container className={styles.result_box} justify="space-around">
          {result.map((items, key) => (
            <React.Fragment key={key}>
              <Link
                href={`/[code]`}
                as={`/${items[items.length - 1]}_${items[0]["Program Code"]}`}
              >
                <Grid
                  item
                  xs={10}
                  md={5}
                  lg={6}
                  style={{ margin: "0.5rem 0", cursor: "pointer" }}
                >
                  <Left
                    university={items[0].University}
                    city={items[items.length - 1]}
                    edu_code={items[0]["Program Code"]}
                    edu_name={items[0].Utbildning}
                  />
                </Grid>
              </Link>
              <Grid item xs={10} md={5} lg={5} style={{ margin: "0.5rem 0" }}>
                {items.map(
                  (detail, i) =>
                    i !== items.length - 1 && (
                      <Right
                        key={i}
                        criteria={detail.Urvalgrupp}
                        points={detail.Points}
                        city={items[items.length - 1]}
                        program_code={detail["Program Code"]}
                      />
                    )
                )}
              </Grid>
            </React.Fragment>
          ))}
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
