import React from "react";
import styled from "styled-components"; 
import logo from "../../assets/logo.png";

const Container = styled.div`
  background-color: #1E2445;
  color: #ffffff;
  padding: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 330px; 
  height: auto;
`;

const Header = () => (
  <Container>
    <HeaderContainer>
      <Logo src={logo} />
      
    </HeaderContainer>
  </Container>
);

export default Header;
