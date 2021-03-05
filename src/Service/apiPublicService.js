import axios from "axios";
import API_URL from "../global";

const URL = API_URL + "/api/public/";

class apiPublicService {
  /*     constructor(){}
   */
  async getAnimals(page = "1") {

    var response = undefined
    const url = `${URL}animals/?page=${page}`;
    while (response === undefined) {
        response = await axios
        .get(url)
        .catch((error) => console.log(error));
        console.log('tentei dnv')   
    }
    
    console.log('response = ', response)
    return response.data;
  }

  /* async getAnimal(id){
        var url = ''
        if(url_query.length>1){
            url = `${URL}animals/?${url_query}`;
        }else{
            url = `${URL}animals/`;
        }
        
        const response = await axios.get(url);
        return response.data
    } */

  /* Animals list */
  /*     async getAnimals(){
        const url = `${API_URL}/api/animals`
        const response = await axios.get(url);
        return response.data;
    } */
  /*     async getAnimalsByUrl(link){
        const url = `${API_URL}${link}`;
        const response = await axios.get(url);
        return response.data;
    } */
  /* Animal by id */
  /*     async getAnimalsByID(id){
        const url = `${API_URL}/api/animals/${id}`;
        const response = await axios.get(url);
        return response.data;
    } */
  /* Change in animal model */

  /* Deleting */
  /*     deleteAnimal(animal){
        const url = `${API_URL}/api/animals/${animal.pk}`;
        return axios.delete(url);
    } */

  /* Create */
  /*     createAnimal(animal){
        const url = `${API_URL}/api/animals/`;
        return axios.post(url,animal);
    }
 */
  /* Update */
  /*     updateAnimal(animal){
        const url = `${API_URL}/api/animals/${animal.pk}`;
        return axios.put(url,animal);
    } */
}

export default apiPublicService;
