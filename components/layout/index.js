import React from "react";

import { makeStyles } from "@material-ui/styles";

import { Header } from "./header";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  txt_area: {
    height: "200px",
    width: "100%",
    padding: "1rem",
    borderRadius: "5px",
    resize: "none",
    margin: "1rem 0",
    outline: "none",
  },
  children: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "0.5rem",
  },
});

export const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.children}>
        <textarea
          placeholder="Placeholder for static text"
          className={classes.txt_area}
        />
        {children}
      </div>
    </>
  );
};

export default Layout;
