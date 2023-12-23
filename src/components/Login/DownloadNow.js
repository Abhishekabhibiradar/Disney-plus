import React from 'react';
import styled from 'styled-components';

import imgStream from '../images/Devices.png';
const DownloadNow = () => {
  return (
    <div>
      <Section>
        <Container>
          <TextInfo>
            <h1 className="disney-titles">Stream Now or Download Now</h1>
            <h1 className="disney-titles">Explore US More on Disney</h1>
            <p>
              Stream on 4 Devices at Once or Download your Favourite to Watch later With dozens of titles i stuuning 4K UHD.you can watch the way you always wished</p>
            <button type="button" className="btn-theme-disney">DOWNLOAD NOW</button>
          </TextInfo>
          <ImgInfo>
            <img src={imgStream} alt="img/stream" />
          </ImgInfo>
        </Container>
      </Section>
    </div>
  );
};

const Section = styled.section`
  padding: 50px 5%;
  position: relative;
  background: transparent;

  @media screen and (max-width: 991px){
    padding: 35px 50px;
    
  }
  @media screen and (max-width: 767px){
    padding: 25px;
    
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const TextInfo = styled.div`
  width: 48%;
  flex: 0 auto;
  opacity: 1;
  z-index: 1500;
  position: relative;

  @media screen and (max-width: 991px){
    width: 100%;
    padding: 0;
    
  }

  p {
    font-size: 1rem;
    font-weight: 100;
    @media screen and (min-width: 375px) and (max-width: 550px){
      font-size: 0.85rem;
      line-height: 1rem;
      
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
      font-size: 0.7rem;
      line-height: 1rem;
      margin-top: 1vh;
      
    }
  }
`;

const ImgInfo = styled.div`
  width: 48%;
  flex: auto;
  opacity: 1;
  z-index: 1500;
  position: relative;
  @media screen and (max-width: 991px){
    width: 100%;
    padding: 0;
  }
  img {
    width: 100%;
    max-width: 600px;
    height: auto;

  
  @media screen and (min-width: 280px) and (max-width: 1200px){
    height: auto;
    width: 100%;
    object-fit: contain;
    margin-top: 3vh;
  }

    @media screen and (min-width: 280px) and (max-width: 500px){
     height: 31vh;
     width: 100%;
     object-fit: contain;
     margin-top: 3vh;
    }
  }
`;

export default DownloadNow;