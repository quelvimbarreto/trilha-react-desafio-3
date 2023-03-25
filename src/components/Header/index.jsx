import React from "react";
import { useState } from "react";
import "./teste.css";
import "../../styles/hamburger.css";
import Logo from "../../assets/logo-dio.png";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

import {
  Wrapper,
  Container,
  Left,
  Right,
  BuscarInputContainer,
  Input,
  Row,
  Menu,
  MenuRight,
  UserPicture,
} from "./styles";

export const Header = ({ autenticado }) => {
  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate("/login");
  };

  const [showNavbar, setShowNavbar] = useState(false);
  const [active, setActive] = useState("");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <Wrapper className="navbar">
      <Container className="container">
        <div className="logo">
          <img src={Logo} alt="" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </div>
        <div className="menu-icon">
          <button
            className={`hamburger hamburger--spin ${active}`}
            type="button"
            onClick={() => {
              handleShowNavbar();
              active === "is-active" ? setActive("") : setActive("is-active");
            }}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <>
            {autenticado ? (
              <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
            ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <MenuRight href="/">Catálogo</MenuRight>
                <MenuRight href="/">Planos</MenuRight>
                <MenuRight href="/">Para Empresas</MenuRight>
                <Button title="ENTRAR" onClick={handleClickSignIn} />
                <Button title="CADASTRAR" />
              </>
            )}
          </>
        </div>
      </Container>
    </Wrapper>
  );
};
