import axios from "axios";
import API_URL from "../global";
/* import {useDispatch} from 'react-redux'

const dispatch = useDispatch(); */

/* Métodos para autenticação, criação e obtenção de usuários */
export default class UserService {
  /* Função que armazena o token na memória do navegador */
  store_token(response) {
    console.log('user response = ', response.data)
    localStorage.setItem("token", response.data["access"]);
    localStorage.setItem("refresh_token", response.data["refresh"]);
  }
  /* Função que armazena faz o GET do token */
  async login(data) {
    const url = `${API_URL}/api/token/`;
    var response = null;

    while (response === null) {
      response = await axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          /* Armazenando os tokens no navegador */
          console.log(response.data)
          this.store_token(response);
          this.store_user_data(response.data);
          console.log("---------- Logado -----------", response);
          /* return response.data */
          return {
            isLogged: true,
            userName: response.data.name,
            userId: response.data.id,
          };
        })
        .catch((error) => {
          console.log("--- Erro de login ---", error.response);
          if (error.response !== undefined) {
            return {
              isLogged: false,
              name: null,
              userId: null,
            };
          } else {
            return null;
          }
        });
    }
    return response;
  }
  /* Método que testa se o usuário está logado */
  async is_logged() {
    /* URL da api para verificar a validade do token */
    const url = `${API_URL}/api/token/verify/`;
    /* Obtendo o token armazenado */
    var token = this.get_token();

    if (token === null) {
      return false;
    }

    /* Fazendo a requisição para API */
    var res = null;
    while (res === null) {
      res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ token: token }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => response);
    }

    /* Se a resposta.ok for true */
    if (res.ok === true) {
      /* console.log('---------- Está logado -----------') */
      return true;
    } else {
      await this.refresh_token();
      token = this.get_token();
      res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ token: token }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((response) => {
        return response;
      });

      if (res.ok === true) {
        /* console.log('---------- Está logado -----------') */
        return true;
      } else {
        /* console.log('---------- Não está logado -----------') */
        return false;
      }
    }
  }
  /* Método que desloga e exclui os tokens do navegador*/
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
  }
  /* Método que obtém o token armazendo */
  get_token() {
    return localStorage.getItem("token");
  }
  /* Método obtém token refresh*/
  get_refresh_token() {
    return localStorage.getItem("refresh_token");
  }
  /* Método que atualiza o token */
  async refresh_token() {
    /* URL da api para atualizar o token */
    const url = `${API_URL}/api/token/refresh/`;
    /* Obtendo o token refresh armazenado */
    const token = this.get_refresh_token();
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ refresh: token }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => res);
    localStorage.setItem("token", res["access"]);
  }
  async get_users(user_type = "none") {
    if (user_type === "none") {
      const url = `${API_URL}/api/users/`;
      const response = await axios.get(url);
      return response.data;
    } else {
      const url = `${API_URL}/api/users/${user_type}/`;
      const response = await axios.get(url);
      return response.data;
    }
  }

  store_user_data(data){
    localStorage.setItem('userName',data.name)
    localStorage.getItem('userId', data.id)
  }
}
