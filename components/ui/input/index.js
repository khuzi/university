import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      maxWidth: 200,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.5rem",
      marginBottom: "1rem",
    },
  },
  label: {
    display: "block",
    marginBottom: "0.2rem",
    marginLeft: "0.1rem",
    textAlign: "left",
  },
}));

export function Input({ placeholder, label, setFunc }) {
  const classes = useStyles();
  return (
    <div className={classes.root} noValidate autoComplete="off">
      <label className={classes.label}>{label}</label>
      <TextField
        id="outlined-size-small"
        variant="outlined"
        size="small"
        placeholder={placeholder}
        multiline
        onChange={(e) => setFunc(e.target.value)}
      />
    </div>
  );
}
