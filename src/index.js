import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Erro from "./pages/404/index";
import Cadastro from "./pages/Cadastro/index";
import CadastroCategoria from "./pages/Cadastro/Categoria/index";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={Cadastro} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Erro} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
