import React from 'react';
import styled, { keyframes } from 'styled-components';
import HeroImage from "../../assets/image-1.png"

// Animation for a subtle fade-in effect
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Main section styling
const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  min-height: 500px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 16px;
  overflow: hidden;
  margin: 60px 0;
  box-shadow: 0 12px 28px rgba(0,0,0,0.08);
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 1024px) {
    min-height: 400px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
    margin: 40px 0;
  }
`;

// Image container
const AboutImage = styled.div`
  flex: 1;
  min-width: 300px;
  height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.02);
    }
  }

  @media (max-width: 1024px) {
    height: 400px;
  }
  @media (max-width: 768px) {
    height: 300px;
    width: 100%;
  }
`;

// Content container
const AboutContent = styled.div`
  flex: 1;
  min-width: 300px;
  padding: 60px;
  box-sizing: border-box;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    color: #2d3436;
    margin-bottom: 24px;
    font-weight: 600;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #636e72;
    margin-bottom: 24px;
  }

  @media (max-width: 1024px) {
    padding: 40px;
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
    }
  }
  @media (max-width: 768px) {
    padding: 30px;
    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

// Logistics company "About Us" component
const AboutUs = () => {
  return (
    <AboutSection id='about'>
      <AboutImage>
        <img src={HeroImage} alt="Logistics Warehouse" />
      </AboutImage>
      <AboutContent>
        <h2>About Our Logistics</h2>
        <p>
          We are a global leader in logistics, offering innovative, technology-driven solutions tailored to your business. Our commitment to excellence ensures your goods are transported efficiently, securely, and transparently—every time.
        </p>
        <p>
          With a robust network and a team of industry experts, we optimize supply chains and provide end-to-end tracking, so you can focus on what matters most: growing your business.
        </p>
      </AboutContent>
    </AboutSection>
  );
};

export default AboutUs;
