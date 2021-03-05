import React from "react";
import CanilAnimalForm from "./CanilAnimalForm";
import VolunteerAnimalForm from "./VolunteerAnimalForm";

const AnimalForm = ({ formType }) => {

  if (formType === "canil") {
    return <CanilAnimalForm />;
  } else {
    console.log('passou aqui')
    return <VolunteerAnimalForm />;
  }
};

export default AnimalForm;