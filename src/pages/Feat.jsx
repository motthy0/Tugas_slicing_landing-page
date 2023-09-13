import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  margin-top: 70px;
  background-color: #f8f8f8;
  padding: 50px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  margin-left: 70px; 
  margin-right: 70px; 
`;

const Header = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  display: inline-block;
`;

const Subheader = styled.p`
  color: #777;
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
`;

const ViewAllButton = styled.button`
  padding: 12px 20px;
  background: #dfe2e7;
  color: #101041; 
  font-size: 16px;
  font-weight:500; 
  border-radius: 50px; 
  border: none; 
  margin-left: 854px; 
  transition: background 0.3s, color 0.3s; 
  
  &:hover {
    background: #101041;
    color: #ffffff; 
  }
`;


const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

const BigFeaturesCard = styled.div`
  padding: 60px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  filter: blur(4px); /* Menambahkan efek blur awal */
  transition: filter 0.3s; /* Efek transisi untuk blur */
  &:hover {
    filter: blur(0); /* Menghapus blur saat dihover */
  }
`;

const SmallFeaturesCard = styled.div`
  padding: 19px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  filter: blur(4px); /* Menambahkan efek blur awal */
  transition: filter 0.3s; /* Efek transisi untuk blur */
  &:hover {
    filter: blur(0); /* Menghapus blur saat dihover */
  }
`;

const Icon = styled.div`
  img {
    max-width: 100px;
  }
`;

const LearnMoreLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

function Feat() {
  return (
    <FeaturesSection>
      <Container>
        <div>
          <Header>
            Key Features
            <ViewAllButton href="#">View All</ViewAllButton>
          </Header>
          <Subheader>Reliable system growth for companies</Subheader>
        </div>
        <FeaturesWrapper>
          <div>
            <BigFeaturesCard>
              <Icon><img src="images/icon_gfb.svg" alt="" /></Icon>
              <div>
                <Header>Good for business</Header>
                <Subheader>
                  Business lorem ipsum meet requirements without breaking the laws and reducing
                  ipsum tax within a couple of days. The document will be reported automatically by.
                </Subheader>
                <LearnMoreLink href="">Learn More</LearnMoreLink>
              </div>
            </BigFeaturesCard>

            <BigFeaturesCard>
              <Icon><img src="images/icon_od.svg" alt="" /></Icon>
              <div>
                <Header>Official Documentations</Header>
                <Subheader>
                  Business lorem ipsum meet requirements without breaking the laws and reducing
                  ipsum tax within a couple of days. The document will be reported automatically by.
                </Subheader>
                <LearnMoreLink href="">Learn More</LearnMoreLink>
              </div>
            </BigFeaturesCard>
          </div>

          <div>
            <SmallFeaturesCard>
              <Icon><img src="images/icon_nc.svg" alt="" /></Icon>
              <div>
                <Header>No-Code</Header>
                <Subheader>
                  Built for non tech-savvy to achieve more results in less effort dolor.
                </Subheader>
              </div>
            </SmallFeaturesCard>

            <SmallFeaturesCard>
              <Icon><img src="images/icon_p.svg" alt="" /></Icon>
              <div>
                <Header>Payment</Header>
                <Subheader>
                  Built for non tech-savvy to achieve more results in less effort dolor.
                </Subheader>
              </div>
            </SmallFeaturesCard>

            <SmallFeaturesCard>
              <Icon><img src="images/icon_a.svg" alt="" /></Icon>
              <div>
                <Header>Analytics</Header>
                <Subheader>
                  Built for non tech-savvy to achieve more results in less effort dolor.
                </Subheader>
              </div>
            </SmallFeaturesCard>
          </div>
        </FeaturesWrapper>
      </Container>
    </FeaturesSection>
  );
}

export default Feat;
