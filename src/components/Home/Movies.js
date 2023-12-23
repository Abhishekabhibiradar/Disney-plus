import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectTrending } from '../Redux/Reducers/MovieReducer';


const Movies = () => {
  const movies = useSelector(selectTrending);

  return (
    <Section>
      <h1 style={{fontSize:"70px",margin:"10px",padding:"10px"}}>Movies</h1>
      <GridContainer>
        {movies &&
          movies.map((value, index) => (
            <GridItem key={index}>
              <div>
                <NavLink to={`/detail/${value.id}`}>
                  <img src={value.CardImg} alt={value.id} />
                </NavLink>
              </div>
            </GridItem>
          ))}
      </GridContainer>
    </Section>
  );
};

const Section = styled.section`
  // Adjust padding and other styles as needed
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const GridItem = styled.div`
  border-radius: 4px;
  overflow: hidden;
  div {
    border-radius: 4px;
    // ... other styles
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    // ... other styles
  }
`;

export default Movies;
