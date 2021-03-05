const initialState = {
  isLogged: false,
  userName: null,
  userId: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "LOGOUT":
      return action.payload[0];

    case "LOGIN":
      return action.payload[0];

    case "IS_LOGGED":
      /* console.log('dispatch', action.payload[0]) */
      return action.payload[0];

    default:
      return state;
  }
}
