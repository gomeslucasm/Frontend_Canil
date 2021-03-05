import { React } from "react";
import wrapperPage from "../../../HOCs/wrapperPage";
import CanilAnimalForm from "../../../Components/Forms/AnimalForm/CanilAnimalForm/index";
import withLogin from "../../../HOCs/withLogin";

const RegisterCanilAnimal = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "1rem" }}>
        Registro de animal do canil
      </h1>
      <CanilAnimalForm />
    </>
  );
};

export default wrapperPage(withLogin(RegisterCanilAnimal));
