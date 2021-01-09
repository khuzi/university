import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Grid } from "@material-ui/core";

import { MetaInfo, Input } from "../components";

export default function Home() {
  return (
    <div>
      <MetaInfo title="Home" />
      <Grid container>
        <Grid item lg={4} md={4} xs={12}>
          <Input label="Program name:" placeholder="free text" />
        </Grid>
        <Grid item lg={4} md={4} xs={12}>
          <Input label="University/College" />
        </Grid>
      </Grid>
    </div>
  );
}
