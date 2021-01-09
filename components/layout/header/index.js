import React from "react";
import Link from "next/link";

import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { DrawerHeader } from "./drawer";

import { header_data } from "../../../data";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    margin: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  logo: {
    margin: "0 0.5rem",
    textAlign: "left",
  },
  comp_name: {
    margin: "0.5rem",
    textAlign: "right",
  },
  drawer: {
    display: " flex",
    justifyContent: "flex-end",
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={6}>
          <div className={classes.logo}>
            <Typography variant="h3">LOGO</Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.comp_name}>
            <Typography variant="h4">Högskola Kollen.se</Typography>
          </div>
        </Grid>
      </Grid>
      <AppBar position="static">
        <Hidden only={["sm", "xs"]}>
          <Toolbar className={classes.toolbar}>
            {header_data.map(({ name, link }) => (
              <Typography variant="h6" key={name}>
                <Link href={link}>
                  <a>{name}</a>
                </Link>
              </Typography>
            ))}
          </Toolbar>
        </Hidden>
        <Hidden only={["xl", "lg", "md"]}>
          <Toolbar className={classes.drawer}>
            <DrawerHeader data={header_data} />
          </Toolbar>
        </Hidden>
      </AppBar>
    </div>
  );
}
