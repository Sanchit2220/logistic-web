//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import { GlobalStyle } from "../globalStyles";
import { lazy, Suspense } from "react";
import HeroSection from "../Sections/Hero/index";
 import Contact from "../Sections/Contact";
import Testimonials from "../Sections/Testimonials";
import AboutUs from "../Sections/About";
 import Services from "../Sections/Services";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection/>
      <AboutUs/>  
      <Services/>
        <Testimonials/>
        <Contact/>
    </Container>
  );
};

export default Home;
