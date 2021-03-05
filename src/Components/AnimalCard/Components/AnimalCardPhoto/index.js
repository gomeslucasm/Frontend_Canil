import React from "react";

const AnimalCardPhoto = ({ photo }) => {
  return (
    <>
      <div className="img-wrapper">
        <img
          src={photo}
          alt=" "
          style={{ width: "100%", borderRadius: "0.5rem 0.5rem 0 0" }}
        />
      </div>
    </>
  );
};

export default AnimalCardPhoto;
