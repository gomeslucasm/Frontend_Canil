import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import "./index.css";

/* import UserService from '../../../Service/UserService'
 */ import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../Store/User/user.actions";
import Loader from "../../Loader";

/* const userService = new userService();
 */
const LoginForm = ({ loginCallback }) => {
  const { register, handleSubmit, /* watch, */ errors } = useForm();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const isLogged = useSelector((state) => state.user.isLogged);
  const [showError, setShowError] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [submited, setSubmited] = useState(false);
  /* const [showSuccess,setShowSuccess] = useState(false) */

  const onSubmit = async () => {
    setSubmited(true);
    setShowError(false);
    setShowLoader(true);
    await dispatch(login(formData));
    setShowLoader(false);
  };

  const handleLogin = useCallback(() => {
    if (isLogged) {
      loginCallback(isLogged);
    } else {
      if (submited) {
        setShowError(true);
      }
    }
  }, [isLogged, submited, loginCallback]);

  useEffect(() => {
    handleLogin();
  }, [isLogged, handleLogin]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (showLoader) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "grid",
          justifyContent: "center",
          margin: "1vh 0",
          padding: "0 0 1rem 0",
        }}
      >
        <div className="login-input">
          <TextField
            color="primary"
            label="Usuário"
            type="text"
            name="username"
            inputRef={register({ required: true })}
            InputProps={{ autoComplete: "off" }}
            onChange={handleChange}
          />
          {errors.username && <p>Escreva seu nome de usuário</p>}
        </div>
        <div className="login-input">
          <TextField
            color="primary"
            label="Senha"
            name="password"
            type="password"
            inputRef={register({ required: true })}
            InputProps={{ autoComplete: "off" }}
            onChange={handleChange}
          />
          {errors.password && <p>Escreva sua senha</p>}
        </div>
        <Button color="success" type="submit">
          Entrar
        </Button>
        <div>
          {showError && (
            <p id="show-error">Usuário ou senha podem estar errados</p>
          )}
        </div>
      </form>
    </>
  );
};

export default LoginForm;
