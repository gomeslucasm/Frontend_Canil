import React from "react";

const CustomDateInput = ({
  label,
  name,
  inputRef,
  errors,
  required = false,
  className,
  style,
  onChange,
  defaultValue,
  comment = "",
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
          type="date"
          style={{ width: "100%" }}
          autoComplete="off"
          ref={inputRef}
          required={true}
          onChange={(e) => {
            onChange(e.target.value, e.target.name);
          }}
          defaultValue={defaultValue}
        />
        <p style={{ fontSize: "10px" }}>{comment}</p>
      </div>
    </>
  );
};

export default CustomDateInput;
