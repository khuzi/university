import React, { useEffect, useContext, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";

import { uni_dropdown } from "../../../queries";

import { HomeContext } from "../../../context/home";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: 200,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
    whiteSpace: "nowarp",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "70px",
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      minWidth: 260,
    },
  },
};

export function AllOne({ label }) {
  const classes = useStyles();

  const [allOneData, setAllOneData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const { university, setUniversity, setCity } = useContext(HomeContext);

  useEffect(() => {
    uni_dropdown(setAllOneData);
    if (!selectAll) {
      setUniversity([]);
    }
  }, [selectAll]);

  const handleChange = (event) => {
    setUniversity(event.target.value);
    allOneData.forEach((e) => {
      if (e["School Name"] === event.target.value[0]) {
        setCity(e.City);
      }
    });
  };

  const onSelectAll = () => {
    setTimeout(() => {
      const allSchools = allOneData.map((item) => item["School Name"]);
      setUniversity(allSchools);
      setSelectAll((prev) => !prev);
      setCity("Stockholm");
    }, 2);
  };

  return (
    <div>
      <label
        style={{
          display: "block",
          marginBottom: "0.2rem",
          marginLeft: "0.1rem",
          textAlign: "left",
        }}
      >
        {label}
      </label>
      <FormControl className={classes.formControl}>
        <Select
          style={{ minHeight: 40 }}
          variant="outlined"
          multiple
          value={university}
          onChange={handleChange}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          <MenuItem>
            <Checkbox checked={selectAll} onClick={onSelectAll} />
            <p style={{ fontSize: "12px" }}>Select All</p>
          </MenuItem>
          {allOneData?.map((item, i) => {
            return (
              <MenuItem key={i} value={item["School Name"]}>
                <Checkbox
                  checked={university.indexOf(item["School Name"]) > -1}
                />
                <ListItemText
                  primary={
                    <p style={{ fontSize: "12px" }}>{item["School Name"]}</p>
                  }
                />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
