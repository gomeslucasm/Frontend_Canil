import React from "react";
import "./index.css";

const AnimalCardInfos = ({ sex_display, sex, size_display, age }) => {
  return (
    <>
      <div style={colorStyle(sex)} id="sex-info">
        {sex_display}
      </div>
      <div>
        <ul style = {{padding:'0 0.5rem', paddingTop:'0.2rem'}}>
          <li>Porte: {size_display}</li>
          <li>Idade: {age}</li>
        </ul>
      </div>
    </>
  );
};

const colorStyle = (sex) => {
  if (sex === "M") {
    return { backgroundColor: "#9fd5d9" };
  } else {
    return { backgroundColor: "pink" };
  }
};

export default AnimalCardInfos;
