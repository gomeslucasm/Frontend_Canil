import React from "react";
import { Col } from "reactstrap";
import "./index.css";
import AnimalCardPhoto from "./Components/AnimalCardPhoto/index";
import AnimalCardInfos from "./Components/AnimalCardInfos/index";
import { Button } from "@material-ui/core";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card-wrapper">
      <AnimalCardPhoto photo={animal.animal_photo[0].photo} />
      <AnimalCardInfos
        sex_display={animal.sex_display}
        sex={animal.sex}
        size_display={animal.size_display}
        age={animal.age}
      />
      <div className="button-wrapper">
        <Button variant="contained" color="primary">
          Ver animal
        </Button>
      </div>
    </div>
  );
};

/* const cardStyle = {
  padding: 0,
  paddingTop: "1rem",
  border: "solid 1px black",
  marginRight: "1px",
}; */

export default AnimalCard;
