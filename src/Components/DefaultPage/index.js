import React, {useCallback, useEffect} from "react";
import { useDispatch } from "react-redux";
import { is_logged } from "../../Store/User/user.actions";
import NavMenu from "../NavMenu";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "./index.css";

const DefaultPage = ({ children }) => {
  const dispatch = useDispatch()

  const getIsLogged = useCallback(()=>{
    dispatch(is_logged())
  },[dispatch])

  useEffect(()=>{
    getIsLogged()
    console.log('viu se está logado')
  },[getIsLogged])
  return (
    <>
      <Header />
      <NavMenu />
      {/* {
        isLogged &&
        <NavAdmin/>
      } */}
      <div id="body">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultPage;
