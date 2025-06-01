import React from "react";
import Facebook from "../../assets/facebook-square-brands.svg";
import LinkedId from "../../assets/linkedin-brands.svg";
import Twitter from "../../assets/twitter-square-brands.svg";
import Instagram from "../../assets/instagram-square-brands.svg";
import styled from "styled-components";

// Styled Components

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: black;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid #803bec;
  }
`;

const SplitContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const MapContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 50%;
  iframe {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

const FormContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const FormSection = styled.div`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  color:black;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 2rem;
 
  a {
   background-color : black;
    &:hover {
      img {
      filter: brightness(13%) saturate(100%) invert(17%) sepia(91%) saturate(1380%) hue-rotate(248deg) brightness(102%) contrast(102%);


      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const InputField = styled.input`
  padding: 1rem calc(0.5rem + 1vw);
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 4px;
  color: black;
  &:active,
  &:focus {
    border: none;
    outline: none;
    background-color: white;
  }
  &::placeholder {
    color: black;
    opacity: 0.6;
  }
  margin-bottom: 1rem;
  &[name="name"] {
    margin-right: 2rem;
    @media only Screen and (max-width: 40em) {
      margin-right: 0;
    }
  }
`;

const Row = styled.div`
  display: flex;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem calc(0.5rem + 1vw);
  width: 100%;
  background-color: white;
  border: none;
  border-radius: 4px;
  color: black;;
  &:focus,
  &:active {
    background-color: white;
  }
  &::placeholder {
    color: black;
    opacity: 0.6;
  }
  margin-bottom: 1rem;
`;

const SubmitButton = styled.button`
  padding: 0.8rem 2rem;
  background-color : #803bec;
  border-radius: 20px;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
    background-color : #803bec ;
  }
  margin: 0 auto;
  display: block;
`;

// Main Component

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Title>Get in touch</Title>
      <SplitContainer>
        <MapContainer>
          
            <SectionTitle>Our Location</SectionTitle>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.949238366613!2d77.20900961508148!3d28.5438099824526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1e82!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1627380441678!5m2!1sen!2sus"
              title="Google Maps Location"
              allowFullScreen
              loading="lazy"
            />
        
        </MapContainer>
        <FormContainer>
          <Form>
        
              <SectionTitle>Connect with us</SectionTitle>
              <Icons>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Facebook} alt="Facebook" />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedId} alt="LinkedIn" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="Instagram" />
                </a>
              </Icons>
           
            <FormSection>
              <SectionTitle>Contact Form</SectionTitle>
              <Row>
                <InputField name="name" type="text" placeholder="Name" />
                <InputField
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                />
              </Row>
              <TextArea
                name="message"
                id="message"
                cols="30"
                rows="4"
                placeholder="your message"
              />
              <SubmitButton
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Send Message
              </SubmitButton>
            </FormSection>
          </Form>
        </FormContainer>
      </SplitContainer>
    </ContactSection>
  );
};

export default Contact;
