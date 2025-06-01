// Footer.js
import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.svg"
// Styled Components
const FooterContainer = styled.div`
  background: #f7fafc;
  padding-top: 20px;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
  color: #2d3748;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const FooterCol = styled.div`
  padding: 20px;
  min-width: 180px;
`;

const FooterTitle = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: #a0aec0;
  font-weight: 500;
  margin-bottom: 8px;
`;

const FooterLink = styled.a`
  display: block;
  margin: 12px 0;
  color: #2d3748;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: #803bec;
  }
  span {
    color: #803bec;
    font-size: 12px;
    padding: 2px;
  }
`;

const FooterBottom = styled.div`
  background: #f7fafc;
  padding: 8px 16px;
  border-top: 1px solid #e2e8f0;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #2d3748;
  font-size: 14px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Copyright = styled.div`
  margin-top: 8px;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  a {
    width: 24px;
    margin: 0 4px;
    svg {
      width: 100%;
      height: 100%;
      fill: #a0aec0;
      cursor: pointer;
      transition: fill 0.2s;
      &:hover {
        fill: #803bec;
      }
    }
  }
  @media (min-width: 768px) {
    margin-top: 0;
    flex-direction: row-reverse;
  }
`;

const Credit = styled.a`
  display: block;
  margin: 20px auto;
  width: 30px;
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
`;

// Component
const Footer = () => (
  <>
    <FooterContainer>
      <FooterContent>
        <FooterCol>
          <FooterTitle>Home</FooterTitle>
          <FooterLink href="/#">Services <span></span></FooterLink>
          <FooterLink href="/#">Products <span></span></FooterLink>
          <FooterLink href="/#">About Us <span></span></FooterLink>
          <FooterLink href="/#">Pricing <span></span></FooterLink>
          <FooterLink href="/#">Partners <span>New</span></FooterLink>
        </FooterCol>
        <FooterCol>
          <FooterTitle>Resources</FooterTitle>
          <FooterLink href="/#">Documentation <span></span></FooterLink>
          <FooterLink href="/#">Tutorials <span></span></FooterLink>
          <FooterLink href="/#">Support <span>New</span></FooterLink>
        </FooterCol>
        <FooterCol>
          <FooterTitle>Support</FooterTitle>
          <FooterLink href="/#">Help Center <span></span></FooterLink>
          <FooterLink href="/#">Privacy Policy <span></span></FooterLink>
          <FooterLink href="/#">Conditions <span></span></FooterLink>
        </FooterCol>
        <FooterCol>
          <FooterTitle>Contact us</FooterTitle>
          <FooterLink href="/#">XXX XXXX, Floor 4 San Francisco, CA <span></span></FooterLink>
          <FooterLink href="/#">contact@company.com <span></span></FooterLink>
        </FooterCol>
      </FooterContent>
    </FooterContainer>
    <FooterBottom>
      <BottomContent>
        <Copyright>© Logistics  Limited, All Rights Reserved.</Copyright>
        <SocialLinks>
          <a href="/#">
            {/* Twitter */}
            <svg viewBox="0 0 24 24"><path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"/></svg>
          </a>
          <a href="/#">
            {/* Facebook */}
            <svg viewBox="0 0 24 24"><path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"/></svg>
          </a>
          <a href="/#">
            {/* YouTube */}
            <svg viewBox="0 0 24 24"><g><circle cx="12" cy="12" r="12"/><path d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938 -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125 0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813 -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068 -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204 -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068 0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204 0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z" fill="#fff"/></g></svg>
          </a>
          <a href="/#">
            {/* LinkedIn */}
            <svg viewBox="0 0 24 24"><path d="M7.3,0.9c1.5,-0.6 3.1,-0.9 4.7,-0.9c1.6,0 3.2,0.3 4.7,0.9c1.5,0.6 2.8,1.5 3.8,2.6c1,1.1 1.9,2.3 2.6,3.8c0.7,1.5 0.9,3 0.9,4.7c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.5 -1.5,2.8 -2.6,3.8c-1.1,1 -2.3,1.9 -3.8,2.6c-1.5,0.7 -3.1,0.9 -4.7,0.9c-1.6,0 -3.2,-0.3 -4.7,-0.9c-1.5,-0.6 -2.8,-1.5 -3.8,-2.6c-1,-1.1 -1.9,-2.3 -2.6,-3.8c-0.7,-1.5 -0.9,-3.1 -0.9,-4.7c0,-1.6 0.3,-3.2 0.9,-4.7c0.6,-1.5 1.5,-2.8 2.6,-3.8c1.1,-1 2.3,-1.9 3.8,-2.6Zm-0.3,7.1c0.6,0 1.1,-0.2 1.5,-0.5c0.4,-0.3 0.5,-0.8 0.5,-1.3c0,-0.5 -0.2,-0.9 -0.6,-1.2c-0.4,-0.3 -0.8,-0.5 -1.4,-0.5c-0.6,0 -1.1,0.2 -1.4,0.5c-0.3,0.3 -0.6,0.7 -0.6,1.2c0,0.5 0.2,0.9 0.5,1.3c0.3,0.4 0.9,0.5 1.5,0.5Zm1.5,10l0,-8.5l-3,0l0,8.5l3,0Zm11,0l0,-4.5c0,-1.4 -0.3,-2.5 -0.9,-3.3c-0.6,-0.8 -1.5,-1.2 -2.6,-1.2c-0.6,0 -1.1,0.2 -1.5,0.5c-0.4,0.3 -0.8,0.8 -0.9,1.3l-0.1,-1.3l-3,0l0.1,2l0,6.5l3,0l0,-4.5c0,-0.6 0.1,-1.1 0.4,-1.5c0.3,-0.4 0.6,-0.5 1.1,-0.5c0.5,0 0.9,0.2 1.1,0.5c0.2,0.3 0.4,0.8 0.4,1.5l0,4.5l2.9,0Z"/></svg>
          </a>
          <a href="/#">
            {/* Dribbble */}
            <svg viewBox="0 0 24 24"><path d="M12,24c6.627,0 12,-5.373 12,-12c0,-6.627 -5.373,-12 -12,-12c-6.627,0 -12,5.373 -12,12c0,6.627 5.373,12 12,12Zm6.591,-15.556l-0.722,0c-0.189,0 -0.681,0.208 -0.681,0.385l0,6.422c0,0.178 0.492,0.323 0.681,0.323l0.722,0l0,1.426l-4.675,0l0,-1.426l0.935,0l0,-6.655l-0.163,0l-2.251,8.081l-1.742,0l-2.222,-8.081l-0.168,0l0,6.655l0.935,0l0,1.426l-3.74,0l0,-1.426l0.519,0c0.203,0 0.416,-0.145 0.416,-0.323l0,-6.422c0,-0.177 -0.213,-0.385 -0.416,-0.385l-0.519,0l0,-1.426l4.847,0l1.583,5.704l0.042,0l1.598,-5.704l5.021,0l0,1.426Z"/></svg>
          </a>
        </SocialLinks>
      </BottomContent>
    </FooterBottom>
    <Credit href="/#"   rel="noopener noreferrer">
      <img src={Logo} alt="logistic Logo" />
    </Credit>
  </>
);

export default Footer;
