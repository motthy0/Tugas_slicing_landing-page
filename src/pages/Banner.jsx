import React from 'react';
import styled from 'styled-components';

const HeaderSection = styled.section`
  margin-top: 70px;
  // background: #f9fbfc;
  padding: 60px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px; 
`;

const HeaderText = styled.div`
  flex: 1;
  max-width: 50%;
`;

const HeaderBadge = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background: #e5e4ff;
  border-radius: 50px;
  width: 290px;
  height: 30px;
`;

const HeaderIcon = styled.img`
  margin-left: 20px;
`;

const HeaderSmallCopy = styled.p`
  font-size: 14px;
  color: #101041;
  font-weight: 600;
  margin: 0;
  margin-left: 10px;
`;

const HeaderBigHeader = styled.h1`
  font-weight: 800;
  color: #101041;
  font-size: 48px;
  line-height: 60px;
  margin: 0;
`;

const HeaderPrimaryCopy = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: #949293;
  margin: 0;
`;

const HeaderButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const HeaderButton = styled.a`
  padding: 12px 20px;
  background: ${(props) => (props.primary ? '#3a38ff' : '#dfe2e7')};
  color: ${(props) => (props.primary ? '#ffffff' : '#101041')};
  font-size: 16px;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => (props.primary ? '#101041' : '#3a38ff')};
    color: #ffffff;
  }
`;

const HeaderImage = styled.img`
  max-width: 100%;
  margin-right: 60px; 
`;


const Header = () => {
  return (
    <HeaderSection>
        <HeaderContainer>
          <HeaderText>
            <HeaderBadge>
              <HeaderIcon src="images/icon_secure.svg" alt="Secure Icon" />
              <HeaderSmallCopy>We won 180 secure-system awards</HeaderSmallCopy>
            </HeaderBadge>
            <HeaderBigHeader>
              Secure Way to<br />Make a Payment
            </HeaderBigHeader>
            <HeaderPrimaryCopy>
              Lorem dolor finance easy transactions with<br />
              a great system that centralized normally.
            </HeaderPrimaryCopy>
            <HeaderButtons>
              <HeaderButton primary href="#">
                Get Started
              </HeaderButton>
              <HeaderButton href="#">Read Stories</HeaderButton>
            </HeaderButtons>
          </HeaderText>
          <HeaderImage src="images/banner.svg" alt="Banner" />
        </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
