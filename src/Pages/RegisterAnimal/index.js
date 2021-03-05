import React, { useState } from "react";
import { Button } from "reactstrap";
import wrapperPage from "../../HOCs/wrapperPage";
import "./index.css";
import { ImArrowLeft } from "react-icons/im";
import withLogin from "../../HOCs/withLogin";
import AnimalForm from "../../Components/Forms/AnimalForm";

const RegisterAnimal = () => {
  const [animalFormType, setAnimalFormType] = useState(null);

  if (animalFormType !== null) {
    return (
      <>
        <div>
          <Button
            color="info"
            className="register-buttons"
            onClick={() => {
              setAnimalFormType(null);
            }}
          >
            <ImArrowLeft /> Voltar
          </Button>
        </div>
        <AnimalForm formType={animalFormType} />
      </>
    );
  }

  if (animalFormType === null) {
    return (
      <>
        <div className="register-animal-body">
          <div id="register-animal-buttons-wrapper">
            <h1>Registro de animal</h1>
            <Button
              color="success"
              className="register-buttons"
              onClick={() => {
                setAnimalFormType("canil");
              }}
            >
              Registrar animal do canil {"   "}
              {/* <ImArrowRight /> */}
            </Button>
            <Button
              color="success"
              className="register-buttons"
              onClick={() => {
                setAnimalFormType("volunteer");
              }}
            >
              Registrar animal que está com voluntário {"    "}
              {/* <ImArrowRight /> */}
            </Button>
          </div>
        </div>
      </>
    );
  }
};

export default wrapperPage(withLogin(RegisterAnimal));
