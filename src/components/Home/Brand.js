import React from 'react'
import styled from 'styled-components'
import { BrandAPI } from '../API/localAPI'


const Brand = () => {
  return (
    <div>
        <Container>
        {

          BrandAPI &&
          BrandAPI.map((value, index) => {
            return (
              <Wrap key={index}>
        
        <img src={value.imgSrc} alt="img/brand" />
        <video autoPlay={true} loop={true} playsInline={true} muted={true}>
          <source src={value.videoSrc} type="video/mp4" />
        </video>
       
      </Wrap>
    );
  })
}
        </Container>
    </div>
  )
}
const Container = styled.div`
    margin-top: 31px;
    padding: 30px 0 26px;

    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    @media screen and (min-width: 768px) and (max-width: 1200px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      grid-gap: 15px;
      gap: 15px;
    }
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: 11px;
      gap: 11px;
    }
`;
const Wrap = styled.div`
    position: relative;
    padding-top: 56.25%;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    object-position: center;
    border: 4px solid rgba(249, 249, 249, 0.1);

    img{
        inset: 0px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        z-index: 1500;
        display: block;
        border-radius: 10px;
        transition: opacity 500ms ease-in-out 0s;
        position: absolute;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        z-index: 0;
        display: block;
        border-radius: 10px;
        position: absolute;
        top: 0;
    }

    &:hover{
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                  rgb(0 0 0 / 70%) 0px 30px 22px -10px;
      transform: scale()(1.05);
      border-color: rgba(249, 249, 249, 0.9);

      video{
        opacity: 1;
        z-index: 2000;
      }
    }
`;
export default Brand ;