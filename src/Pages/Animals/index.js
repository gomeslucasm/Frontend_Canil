import React from "react";
/* import apiPublicService from "../../Service/apiPublicService"; */
import wrapperPage from "../../HOCs/wrapperPage";
import ListAnimals from "../../Components/ListAnimals";

/* const publicService = new apiPublicService();
 */
const Animals = () => {
  return (
    <>
      <ListAnimals />
    </>
  );
};

export default wrapperPage(Animals);
