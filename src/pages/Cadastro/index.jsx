import React from "react";
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Container, ContainerForm, Label, Form } from "./styles";

const Cadastro = () => {

  return (
    <Container>
      <h2>Crie sua conta</h2>
      <p>Cadastre-se para acessar a plataforma</p>
      <ContainerForm>
        <Form>
          <Label>Nome</Label>
          <Input type="text" placeholder="Informe seu nome" />
          <Label>E-mail</Label>
          <Input type="text" placeholder="Informe seu e-mail" />
          <Label>Senha</Label>
          <Input type="text" placeholder="Informe sua senha" />
          <Button>Fazer Login</Button>
        </Form>
      </ContainerForm>

    </Container>
  )
}

export default Cadastro;
