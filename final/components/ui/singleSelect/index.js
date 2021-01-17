import React, { useState, useEffect } from "react";

import Select from "react-select";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    [theme.breakpoints.down("sm")]: {
      margin: "0 0.5rem",
      marginBottom: "3rem",
    },
  },
  label: {
    display: "block",
    marginBottom: "0.2rem",
    marginLeft: "0.1rem",
    textAlign: "left",
  },
}));

export const SingleSelect = ({
  label,
  data,
  placeholder,
  mainData,
  setUni,
  setCity,
  reset,
}) => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    if (reset) {
      setVal([]);
    }
  }, [reset]);

  const setParams = (e) => {
    let city = null;
    mainData.forEach((item) => {
      if (item["School Name"] === e.value) {
        city = item.City;
        setCity(city);
        setUni(e.value);
      } else if (e.value === "allUnis") {
        setCity("Stockholm");
        setUni(null);
      }
    });
    setVal([e]);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <label className={classes.label}>{label}</label>
      <Select
        label="Single select"
        options={data}
        placeholder={placeholder}
        onChange={setParams}
        value={val}
      />
    </div>
  );
};
