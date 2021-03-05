import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../Components/Forms/LoginForm";
import Loader from "../Components/Loader";

const withLogin = (WrappedComponent) => {
  const WithLogin = (props) => {
    const isLogged = useSelector((state) => state.user.isLogged);

    console.log('is logado', isLogged)

    if (isLogged) {
      return (
        <>
          <WrappedComponent {...props} />
        </>
      );
    } else if (isLogged === false) {
      return <LoginForm/>
    } else if (isLogged === null) {
      return <Loader/>
    }
  };

  return WithLogin;
};

export default withLogin;
