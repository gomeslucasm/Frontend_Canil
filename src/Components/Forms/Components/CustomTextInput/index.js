import React from "react";
import "./index.css";

const CustomTextInput = ({
  label,
  name,
  type = "text",
  inputRef,
  /* errors, */
  required = false,
  className,
  style,
  onChange,
}) => {
  return (
    <>
      <div className={`form-input-register ${className}`} style={{ ...style }}>
        <label htmlFor={name} style={{ width: "100%" }}>
          {label}{" "}
          {required && <p style={{ color: "red", display: "contents" }}>*</p>}
        </label>
        <input
          name={name}
          type={type}
          style={{ width: "100%" }}
          autoComplete="off"
          ref={inputRef}
          required={required}
          onChange={(e) => {
            onChange(e.target.value, e.target.name);
          }}
        />
      </div>
    </>
  );
};

export default CustomTextInput;
