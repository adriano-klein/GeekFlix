import React from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <PageDefault>
      <h1>Cadastro de vídeo</h1>

      <Link to="/cadatro/categoria">Cadastrar categoria</Link>
    </PageDefault>
  );
}

export default Cadastro;
