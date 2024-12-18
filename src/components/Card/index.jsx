import React from "react";
import { Container, Description, Img, Itens, Title } from "./styles";
import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Container>
      <Img>
        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
      </Img>
      <Description>
        <Title>
          Apartamento
        </Title>
        <Itens>
          <span><FaMapMarkedAlt />Vila Buarque, São Paulo</span>
          <span>R$ 2.400,00 / mês</span>
        </Itens>
        <Link to='/imovel'>Detalhes <FaArrowRight /></Link>
      </Description>
    </Container>
  )
}

export default Card;
