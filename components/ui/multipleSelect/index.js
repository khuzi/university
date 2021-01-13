import React from "react";

import Select from "react-select";

export const MultipleSelect = ({ label, data, setFunc }) => {
  const onSetValues = (items) => {
    const values = items.map(({ value }) => value);
    setFunc(values);
  };
  return (
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
        onChange={(e) => onSetValues(e)}
        placeholder="Enter"
        isMulti
        name="colors"
        options={data}
        className="basic-multi-select"
        classNamePrefix="select"
      />
    </div>
  );
};
