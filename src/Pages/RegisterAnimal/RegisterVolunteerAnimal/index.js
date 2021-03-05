import { React } from "react";
import wrapperPage from "../../../HOCs/wrapperPage";
import VolunteerAnimalForm from "../../../Components/Forms/AnimalForm/VolunteerAnimalForm/index";

const RegisterVolunteerAnimal = () => {
    return(
        <>
            <VolunteerAnimalForm/>
        </>
    )
}

export default wrapperPage(RegisterVolunteerAnimal)