import React, { useState, useEffect } from "react";

import Select from "react-select";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
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

export const MultipleSelect = ({
  label,
  data,
  placeholder,
  setFunc,
  reset,
}) => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    if (reset) {
      setVal([]);
    }
  }, [reset]);

  const onSetValues = (item) => {
    console.log(item);
    const values = item.map(({ value }) => value);
    setFunc(values);
    setVal(item);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <label className={classes.label}>{label}</label>
      <Select
        onChange={(e) => onSetValues(e)}
        placeholder={placeholder}
        value={val}
        isMulti
        name="colors"
        options={data}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};
