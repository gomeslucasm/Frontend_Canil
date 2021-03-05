import React /* , { useState } */ from "react";
import "./index.css";

const SelectInput = ({
  options,
  label,
  name,
  onChange,
  inputRef,
  required = false,
  className,
  style,
  selectLabel,
}) => {
  /* const [value, setValue] = useState(null); */

  /* const handleChange = (e) => {
    setValue(e.target.value);
  }; */

  return (
    <>
      <div className={`form-select-register ${className}`} style={{ ...style }}>
        <label htmlFor={name} style={{ width: "100%" }}>
          {label}{" "}
          {required && <p style={{ color: "red", display: "contents" }}>*</p>}
        </label>

        <select
          name={name}
          id={label}
          style={{ width: "100%" }}
          onChange={(e) => {
            onChange(e.target.value,e.target.name);
          }}
          ref={inputRef}
          required={true}
          defaultValue = {'default'}
        >
          <option disabled value = 'default'>
            {" "}
            -- {selectLabel} --{" "}
          </option>

          {Object.keys(options).map((key) => {
            return (
              <option key={key} value={options[key]}>
                {key}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
