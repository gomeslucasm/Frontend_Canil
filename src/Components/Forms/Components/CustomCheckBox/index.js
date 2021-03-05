import React from "react";
import "./index.css";

const CustomCheckBox = ({
  label,
  name,
  /* inputRef,
  errors,
  required = false, */
  className = " ",
  style = "",
  onChange,
  defaultValue = false,
}) => {
  return (
    <div
      className={`form-checkbox-register${className}`}
      style={{ ...style }}
    >
      <label
        htmlFor={name}
        style={{ margin: "auto", justifyContent: "center", display: "flex" }}
      >
        <input
          type="checkbox"
          name={name}
          style={{ marginRight: "1vw" }}
          onChange={(e)=>{
            onChange(e.target.checked,e.target.name)
          }}
          defaultValue = {defaultValue}
        />
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
