import React, { lazy, useEffect, useRef } from "react";
import styled from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color :white;
  width: 100%;
  padding: 5rem 0;
`;

const Title = styled.h1`
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1rem + 1.5vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only Screen and (max-width: 40em) {
    width: 90vw;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #0a0b10;
    font-size: 1.5rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    color: #0a0b10;
    font-size: 1rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
  }
`;

const Testimonials = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Section>
      <Title>Few good words about us!</Title>
      <Carousal>
        <Slider {...settings} ref={sliderRef}>
          <Card
            text="Excellent service! Timely deliveries and great communication throughout. Highly reliable logistics partner."
            name="John Doe"
            image="user"
          />

          <Card
            text="Everything arrived on time and in perfect condition. Super smooth experience—will use again!"
            name="John Doe"
            image="user"
          />

          <Card
            text="Fast, efficient, and well-organized. Their tracking system kept us updated every step of the way."
            name="John Doe"
            image="user"
          />

          <Card
            text="Great customer support and problem resolution. Really impressed with how they handled unexpected delays."
            name="John Doe"
            image="user"
          />
          
          <Card
            text="Reliable and hassle-free logistics. No complaints!"
            name="John Doe"
            image="user"
          />
          
          <Card
            text="Excellent logistics management – smooth from pickup to delivery. Will use again!"
            name="John Doe"
            image="user"
          />
          
          <Card
            text="Efficient and affordable. Good communication during the shipping process."
            name="John Doe"
            image="user"
          />
          
          <Card
            text="Professional handling and timely delivery. Very satisfied with the logistics coordination."
            name="John Doe"
            image="user"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;