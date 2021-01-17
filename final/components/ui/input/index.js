import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.5rem",
      marginBottom: "1rem",
    },
  },
  input: {
    padding: "0.7rem",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
    "&:focus": {
      border: "2px solid var(--primary-color)",
    },
  },
  label: {
    display: "block",
    marginBottom: "0.2rem",
    marginLeft: "0.1rem",
    textAlign: "left",
  },
}));

export function Input({ placeholder, label, setFunc, type }) {
  const classes = useStyles();
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <label className={classes.label}>{label}</label>
      <input
        className={classes.input}
        placeholder={placeholder}
        onChange={(e) => setFunc(e.target.value)}
        type={type}
      />
    </div>
  );
}
