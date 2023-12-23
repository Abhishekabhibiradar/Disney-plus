import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectNewTo } from '../Redux/Reducers/MovieReducer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewtoDisney = () => {
  const movies = useSelector(selectNewTo);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 991, settings: { slidesToShow: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2 } },
      { breakpoint: 425, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      <Section>
        <h1>New to Disney</h1>
        <Carousal {...settings}>
          {movies &&
            movies.map((value, index) => (
              <Wrap key={index}>
                <div>
                  <NavLink to={`/detail/${value.id}`}>
                    <img src={value.CardImg} alt={value.id} />
                  </NavLink>
                </div>
              </Wrap>
            ))}
        </Carousal>
      </Section>
    </div>
  );
};

const Section = styled.section`
  padding: 0.5rem 0;
  h1 {
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 300 !important;
    text-shadow: 0ch.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.1);
    margin: 2vh 0 1vh 2rem;

    @media screen and (max-width: 991px) {
      font-size: 1.1rem;
    }

    @media screen and (max-width: 550px) {
      font-size: 0.95rem;
    }
  }
`;

const Carousal = styled(Slider)`
  /* Add any styling specific to the carousel wrapper if needed */
  ul li button {
    &::before {
      font-size: 11px;
      color: rgb(150, 158, 171);
    }
  }
  ul li.slick-active button {
    &::before {
      color: #fff !important;
    }
  }
  & > button {
    opacity: 0;
    z-index: 1500;
    width: 5vw;
    height: 100%;

    &:hover {
      opacity: 1;
      z-index: 2000;
      transition: opacity 0.2s ease 0s;
    }
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
  .slick-list {
    overflow: initial !important;
  }
`;

const Wrap = styled.div`
  position: relative;

  div {
    border-radius: 4px;
    padding: 5px;
    display: block;
    opacity: 1;
    z-index: 2000;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: default;
    object-position: center;
  }
  img {
    width: 100%;
    height: 15vh;
    object-fit: fill;
    border-radius: 4px;
    opacity: 1;
    z-index: 1500;

    @media screen and (max-width: 991px) {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  &:hover {
    opacity: 1;
    z-index: 2000;
    padding: 0;
    border: 4px solid rgba(249, 249, 249, 0.8);
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;

export default NewtoDisney;
