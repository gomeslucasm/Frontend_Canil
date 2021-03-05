import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
/* ----------------------------- */
import "./index.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'antd-button-color/dist/css/style.css'; // or 'antd-button-color/dist/css/style.less'

/* ----------------------------- */
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { MuiThemeProvider /* , ThemeProvider  */ } from "@material-ui/core";
/* ----------------------------- */
/* Pages import  */
import { theme } from "./styles";
import RegisterAnimal from "./Pages/RegisterAnimal/index";
/* import { ChakraProvider } from "@chakra-ui/react"; */
import RegisterVolunteerAnimal from "./Pages/RegisterAnimal/RegisterVolunteerAnimal";
import RegisterCanilAnimal from "./Pages/RegisterAnimal/RegisterCanilAnimal";
import Animals from "./Pages/Animals";
/* ----------------------------- */

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 */

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Route path="/" exact component={HomePage} />
          <Route path="/registrar/animal/" exact component={RegisterAnimal} />
          <Route path="/animais/" exact component={Animals} />
          <Route
            path="/registrar/animal/canil/"
            exact
            component={RegisterCanilAnimal}
          />
          <Route
            path="/registrar/animal/voluntario/"
            exact
            component={RegisterVolunteerAnimal}
          />
        </MuiThemeProvider>
      </Provider>
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
