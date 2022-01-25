import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

import {Container, Typography } from "@material-ui/core"
import {validarSenha, validarSenha} from "./models/cadastro"
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm}  validacoes={{cpf:validarCPF, senha:validarSenha}} />
      </Container>
      /*AQUI COMO ESTA NO JAVASCRIPT TEM QUE POR 2{{}} NO {{CPF:VALIDARCPF,SENHA:VALIDARSENHA}} POIS SÓ COM UMA ÃO FUNCIONA   */
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}


export default App;
