import React from "react";
import Select from "react-select";

import { colourOptions } from "../../../data";

export const SingleSelect = ({ label }) => (
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
    <Select label="Single select" options={colourOptions} />
  </div>
);
