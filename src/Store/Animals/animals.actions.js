import apiPrivateService from "../../Service/apiPrivateService";
import apiPublicService from "../../Service/apiPublicService";
import store from "../store";
import { filterAnimalById } from "../../Utils/utils";

const privateService = new apiPrivateService();
const publicService = new apiPublicService();

export function getAnimals(page = "1") {
  return async function (dispatch, getState) {
    /* const logged = await store.getState().login; */

    var response = await publicService.getAnimals(page);
    console.log('reponse', response)

/*     console.log('------------')
    console.log(response, 'teste'); */
    return dispatch({
      type: "GET_ANIMALS",
      payload: [response],
    });
  };
}


/* export function testeAction() {
  const state = {
    data: [],
    prevPage: null,
    nextPage: 1,
  };
  console.log('lalalalalaala')

  return {
    type: "TEST",
    payload: [state,],
  };
} */

export function updateAnimalByIndex() {
  var animals = store.getState().animals;
  const currentAnimal = store.getState().selectAnimal.animal;
  const currentAnimalIndex = store.getState().selectAnimal.index;
  /* Atualizando valor do animal no estado geral */
  animals.data[currentAnimalIndex] = currentAnimal;
  return {
    type: "UPDATE_ANIMAL",
    payload: [animals],
  };
}

export function updateAnimalById(data, id) {
  return async function (dispatch/* , getState */) {
    /* console.log("-------------");
    console.log("-- Passou aqui --");
    console.log("-------------"); */
    var animals = store.getState().animals;
    const response = await privateService.animalPartialUpdate(data, id);
    const animal = response.data;
    var filteredData = await filterAnimalById(animals.data, animal.id);
    const index = filteredData[1];
    /* console.log("Filtered idx", filteredData[1], "ID", id);
    console.log("Animal", animal); */
    animals.data[index] = animal;
    const state = {
      data: animals.data,
      prevPage: animals.prevPage,
      nextPage: animals.nextPage,
      pages: animals.pages,
      currentPage:animals.page,
    };

    return dispatch({
      type: "UPDATE_ANIMAL_BY_ID",
      payload: [state],
    });
  };
}

