import axios from "axios";
import API_URL from "../global";
import UserService from "./UserService";

const URL = API_URL + "/api/private/";
const userService = new UserService();
const token = userService.get_token();
class apiPrivateService {
  async deleteAnimal(id) {
    var url = `${URL}animals/` + String(id) + "/";
    const response = await axios.delete(url, {
      headers: {
        Authorization: `JWT ${token}`,
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
    });
    return response;
  }

  async postAnimal(data) {
    const url = `${URL}animals/`;
    console.log("data", data);
    const response = await axios.post(
      url,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    console.log('Animal Criado = ', response)
    return response;
  }

  async getAnimal(id) {
    const url = `${URL}animals/${id}/`;
    const response = await axios.get(
      url,
      { body: JSON.stringify({ token: token }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return response.data;
  }

  async getAnimals(page = "1") {
    const url = `${URL}animals/?page=${page}`;
    const token = userService.get_token();
    console.log("aqui");
    const response = await axios.get(
      url,
      { body: JSON.stringify({ token: token }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    /* console.log('response',response) */
    return response.data;
  }

  async getAdopters() {
    const url = `${URL}adopters/`;
    const response = await axios.get(
      url,
      { body: JSON.stringify({ token: token }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return response.data;
  }

  async getAdopter(id) {
    const url = `${URL}adopters/${id}/`;
    const response = await axios.get(
      url,
      { body: JSON.stringify({ token: token }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return response.data;
  }

  async postAdopter(data) {
    const url = `${URL}adopters/`;
    const response = await axios.post(
      url,
      data,
      { body: JSON.stringify({ token: token }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    return response.data;
  }

  async animalPartialUpdate(data, id) {
    const url = `${URL}animals/${id}/`;
    const response = await axios.put(
      url,
      data,
      { body: JSON.stringify({ token: token }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    console.log("response update", response);
    return response;
  }

  async adopterPartialUpdate(data, id) {
    const url = `${URL}adopters/${id}/`;

    const response = await axios.put(
      url,
      data,
      { body: JSON.stringify({ token: token }) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
    /* console.log("response update", response); */
    return response.data;
  }

  async postAdoption(data) {
    const url = `${URL}adoption/`;
    const response = await axios
      .post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .catch((error) => {
        return error.response;
      });

    return response;
  }
}

export default apiPrivateService;
