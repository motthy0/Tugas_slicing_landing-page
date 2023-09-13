import React from 'react';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  background: #f9fbfc;
  padding: 38px;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
  // box-shadow: 0px 0px 0px 1px grey;
  margin: 0px 80px 0px 80px;
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavbarBrand = styled.a`
  font-weight: 700;
  font-size: 28px;
  color: #101041;
  text-decoration: none;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 25px;
`;

const NavbarLink = styled.a`
  color: #101041;
  text-decoration: none;
  font-weight: 400;
  transition: all 0.3s ease;

  &:hover {
    color: #3a38ff;
    font-weight: 600;
  }
`;

const NavbarButton = styled.button`
  padding: 12px 20px;
  background: #3a38ff;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  border-radius: 25px;
  transition: background 0.3s ease, color 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #101041;
    color: #ffffff;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarInner>
          <NavbarBrand href="#">MutuFinance</NavbarBrand>
          <NavbarLinks>
            <NavbarLink href="#">Features</NavbarLink>
            <NavbarLink href="#">Pricing</NavbarLink>
            <NavbarLink href="#">Stories</NavbarLink>
            <NavbarLink href="#">Plugins</NavbarLink>
          </NavbarLinks>
          <NavbarButton>My Account</NavbarButton>
        </NavbarInner>
    </NavbarContainer>
  );
};

export default Navbar;
