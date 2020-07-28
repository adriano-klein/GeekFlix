import React from "react";
import PageDefault from "../../../components/PageDefault/index";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>CadastroCategoria de Categoria</h1>

      <Link to="/">Voltar para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
