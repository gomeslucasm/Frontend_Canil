import { Button } from "primereact/button";
import React, { useRef/* ,useEffect, useState */ } from "react";
import "./index.css";

const CustomImageInput = ({ imageCallback }) => {
  const imgRef = useRef();
  /* const [img, setImg] = useState(null); */

  const clickInput = (e) => {
    e.preventDefault();
    imgRef.current.click();
  };

  const handleChange = async (e) => {
    e.preventDefault()
    imageCallback(e.target.files[0]);
    e.target.value = null
    console.log('passou aqui')
  };

  return (
    <div className="form-input-image">
      <input
        style={{ display: "none" }}
        type="file"
        onChange={handleChange}
        ref={imgRef}
      />
      <Button
        type="button"
        label="Adicionar imagem do animal"
        icon="pi pi-plus"
        iconPos="left"
        onClick={clickInput}
      />
    </div>
  );
};

export default CustomImageInput;
