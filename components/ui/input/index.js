import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      maxWidth: 200,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "1rem",
      marginLeft: "1rem",
    },
  },
  label: {
    display: "block",
    marginBottom: "0.2rem",
    marginLeft: "0.1rem",
    textAlign: "left",
  },
}));

export function Input({ placeholder, label }) {
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
      />
    </div>
  );
}
