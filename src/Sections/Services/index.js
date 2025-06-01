import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenFancy,
  faDharmachakra,
  faTasks,
  faTachometerAlt,
  faRecycle,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

// Styled Components
const GlobalStyles = styled.div`
  a, a:hover, a:focus, a:active {
    text-decoration: none;
    outline: none;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

const WeOfferArea = styled.section`
  padding: 60px 0;
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) { max-width: 540px; }
  @media (min-width: 768px) { max-width: 720px; }
  @media (min-width: 992px) { max-width: 960px; }
  @media (min-width: 1200px) { max-width: 1140px; }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  &.our-offer-items {
    justify-content: center;
  }
`;

const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
  @media (min-width: 576px) { flex: 0 0 50%; max-width: 50%; }
  @media (min-width: 992px) { flex: 0 0 33.3333%; max-width: 33.3333%; }
  &.equal-height {
    display: flex;
    margin-bottom: 30px;
  }
  &.full-width {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const SiteHeading = styled.div`
  margin-bottom: 60px;
  margin-top: -5px;
  text-align: center;

  h2 {
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 2.5rem;
    color: #333;
    span {
      color: #803bec;
    }
  }

  h4 {
    display: inline-block;
    position: relative;
    padding-bottom: 10px;
    font-size: 18px;
    margin: 0 auto;
    text-align: center;
    color: #666;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background: #803bec;
    }
  }
`;

const IconWrapper = styled.div`
  background: #803bec;
  border-radius: 50%;
  color: #ffffff;
  font-size: 40px;
  height: 80px;
  width: 80px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  transition: all 0.35s ease-in-out;

  &:after {
    border: 2px solid #803bec;
    border-radius: 50%;
    content: "";
    height: 90px;
    left: -5px;
    position: absolute;
    top: -5px;
    width: 90px;
    z-index: -1;
    transition: all 0.35s ease-in-out;
  }

  svg {
    font-size: 40px;
    transition: all 0.35s ease-in-out;
  }
`;

const Item = styled.div`
  background: #ffffff;
  border: none;
  box-shadow: 0 0 10px #cccccc;
  overflow: hidden;
  padding: 67px 40px 64px;
  position: relative;
  z-index: 1;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 15px;
    transition: all 0.35s ease-in-out;
    color: #333;
    font-size: 1.25rem;
  }

  p {
    margin: 0;
    transition: all 0.35s ease-in-out;
    color: #666;
    line-height: 1.6;
    text-align: center;
  }

  &:after {
    background: #803bec;
    content: "";
    height: 100%;
    left: -100%;
    position: absolute;
    top: 0;
    transition: all 0.35s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &:hover:after {
    left: 0;
  }

  &:hover ${IconWrapper},
  &:hover h4,
  &:hover p {
    color: #ffffff !important;
  }

  &:hover ${IconWrapper}:after {
    border-color: #ffffff !important;
  }

  &:hover ${IconWrapper} {
    background-color: #ffffff !important;
    color: #803bec !important;
    
    svg {
      color: #803bec !important;
    }
  }
`;

// Offer data
const offers = [
  { icon: faPenFancy, title: "Fast. Reliable. Everywhere.", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: faDharmachakra, title: "We Move What Matters", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: faTasks, title: "Logistics That Work Like Clockwork", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: faTachometerAlt, title: "Why Businesses Choose Us", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: faRecycle, title: "Ready to Ship Smarter?", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
  { icon: faHeadset, title: "24/7 Support", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." }
];

// Main Component
const Services = () => (
  <GlobalStyles >
    <WeOfferArea >
      <Container>
        <Row >
          <Col className="full-width">
            <SiteHeading >
              <h2>What we <span>Offer</span></h2>
              <h4>Lorem Ipsum is simply dummy text</h4>
            </SiteHeading >
          </Col>
        </Row>
        <Row className="our-offer-items"  >
          {offers.map((offer, index) => (
            <Col key={index} className="equal-height">
              <Item id='services'>
                <IconWrapper>
                  <FontAwesomeIcon icon={offer.icon} />
                </IconWrapper>
                <h4>{offer.title}</h4>
                <p>{offer.text}</p>
              </Item>
            </Col>
          ))}
        </Row>
      </Container>
    </WeOfferArea>
  </GlobalStyles>
);

export default Services;