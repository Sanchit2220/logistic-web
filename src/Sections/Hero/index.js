 import styled from "styled-components";
import HeroImage from "../../assets/hero-image.png"
  

const Main = styled.main`
  overflow: hidden;
  margin-top: 10px;
  margin-bottom : 8rem;

`;

const Section = styled.section`
  margin: 0 auto;
  padding: 5rem 0 2rem;
  
`;

const BannerColumn = styled.div`
  display: grid;
  align-items: center;
  row-gap: 2rem;
   max-width: 85rem;
  margin: 0 auto;
  padding: 0 1.25rem;
  @media (min-width: 48rem) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 4rem;
  }
  @media (min-width: 64rem) {
    grid-template-columns: 1fr max-content;
    column-gap: 2rem;
  }
`;

const BannerImage = styled.img`
  display: block;
  max-width: 25rem;
  justify-self: center;
  @media (min-width: 48rem) {
    order: 1;
    max-width: 28rem;
  }
  @media (min-width: 64rem) {
    max-width: 33rem;
  }
`;

const BannerInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1.5rem;
`;

const HeadingXL = styled.h1`
  font-size: clamp(2.648rem, 6vw, 4.241rem);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -1px;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  font-family:	Sans-serif;
`;
 

// 3. Main App Component
export default function App() {
  
  

  return (
    <>
       
      
      <Main>
        <Section id="home">
          <BannerColumn>
            <BannerImage
              src={HeroImage}
              alt="Illustration"
            />
            <BannerInner>
              <HeadingXL>Trusted Logistics That Deliver On Time, Every Time</HeadingXL>
              <Paragraph>
               We provide fast, secure, and on-time delivery solutions for businesses of all sizes.
From first mile to last, your cargo is in trusted hands.
Track your shipments in real-time and experience hassle-free logistics.
Your success is our destination.
              </Paragraph>
          
            </BannerInner>
          </BannerColumn>
        </Section>
      </Main>
    </>
  );
}
