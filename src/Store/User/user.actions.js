import UserService from "../../Service/UserService";

const userService = new UserService();

export function login(data) {
  return async function (dispatch, getState) {
    const response = await userService.login(data);
    console.log('reponse',response)
    const state = response;

    return dispatch({
      type: "LOGIN",
      payload: [state,],
    });
  };
}

export function logout() {
  userService.logout();

  const state = {
    isLogged: false,
    userName: null,
    userId: null,
  };

  return {
    type: "LOGOUT",
    payload: [state],
  };
}

export function is_logged() {
  return async function (dispatch, getState) {
    const isLogged = await userService.is_logged();

    const state = {
      isLogged: isLogged,
      userName: null,
      userId: null,
    };

    if (isLogged) {
      console.log("---- Está logado ----", isLogged);
      state.userName = localStorage.getItem('userName');
      state.userId = localStorage.getItem('userId');
    } else {
      console.log("---- Não está logado ----", isLogged);
    }

    

    return dispatch({
      type: "IS_LOGGED",
      payload: [state],
    });
  };
}
