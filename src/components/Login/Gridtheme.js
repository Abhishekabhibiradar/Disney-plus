import React from 'react';
import styled from "styled-components";

import img1 from '../images/Disney_MLP_GridItem_TS4_AUNZ.jpg';
import img2 from '../images/ForkyAsksAQuestion_en-US.jpg';
import img3 from '../images/moana-poster-4-2.png';
import img4 from '../images/Poster_InfinityWar_EN.jpg';
import img5 from '../images/Disney_MLP_GridItem_SWRiseofSkywalker.jpg';
import img6 from '../images/Soul_EN_(1).png';
import img7 from '../images/LUCA-2.png';
import img8 from '../images/SW_Clone_Wars.png';
import img9 from '../images/Mickey_Mouse_Clubhouse_Grid_Item_052820.jpg';

const Gridtheme = () => {
    const API_IMG = [
        {imgSrc: img1},{imgSrc: img2},{imgSrc: img3},{imgSrc: img4},{imgSrc: img5},{imgSrc: img6},{imgSrc: img7},{imgSrc: img8},{imgSrc: img9}
    ];
    
  return (
    <>
        <Section>
            <Container>
                <Title>
                    <h1 className='disney-titles'>Stream Exclusive Disney+ Originals</h1>
                    <p>New Stories from our incredible family of studios</p>
                </Title>
                <Gridimg>
                    {
                        API_IMG && API_IMG.map((value,index) => (
                            <Image key={index}><img src={value.imgSrc} alt="grid/img" /></Image>
                        ))
                    }
                </Gridimg>
                <GetBundleBtn><button type="button" className="btn-theme-display">Get The Disney Bundles</button></GetBundleBtn>
            </Container>
        </Section>
    </>
  );
};
const Section = styled.section`
    padding: 5vh 0;
    position: relative;
`;
const Container = styled.div`
    width: 95%;
    margin: 0 auto;
`;
const Title = styled.div`
    text-align: center;
    margin-bottom: 3vh;
    p {
        font-size: 1rem;
        @media screen and (max-width: 550px) {
            font-size: 0.8rem;
        }
    }
`;
const Gridimg = styled.div`
    display: grid;
    gap: 15px 25px;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    @media screen and (max-width: 991px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;
const Image = styled.div`
    width: 100%;
    padding: 0;
    border-radius: 0.245;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 0.245rem;
    }
`;
const GetBundleBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 1vh 0;
`;
export default Gridtheme;
