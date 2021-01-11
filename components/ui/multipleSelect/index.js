import React from "react";

import Select from "react-select";
import { colourOptions } from "../../../data";

export const MultipleSelect = ({ label }) => (
  <div style={{ width: "200px" }}>
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
    <Select
      onChange={(e) => console.log(e)}
      placeholder="Enter"
      isMulti
      name="colors"
      options={colourOptions}
      className="basic-multi-select"
      classNamePrefix="select"
    />
  </div>
);
