import React, { useEffect } from 'react';
import dbConfig from '../Firebase';
import styled from 'styled-components'

import { useDispatch } from 'react-redux';
import { setDisneyMovies } from './Redux/Reducers/MovieReducer';

import background from '../components/images/bgcolourforhome.jpg';
import Banner from './Home/Banner.js';
import Brand from './Home/Brand.js';
import Original from './Home/Original';
import NewtoDisney from './Home/NewtoDisney';
import Trending from './Home/Trending';
import Hollywood from './Home/Hollywood';


import Popular from './Home/Popular';


const Home = () => {
  const dispatch=useDispatch(); 
  let popular = [];
  let hollywood = [];
  let newTo = [];
  let original = [];
  let trending = [];

 
  useEffect(() => {
   dbConfig.collection("Movies").onSnapshot((snapshot)=>{
    //console.log(snapshot)
    snapshot.docs.map((doc) =>{
      //console.log(doc.data().type)

      switch (doc.data().type) {
        case "popular":
          popular = [...popular, {id: doc.id, ...doc.data()}];
          break;
        case "hollywood":
          hollywood = [...hollywood, {id: doc.id, ...doc.data()}];
          break;
        case "newTo":
          newTo = [...newTo, {id: doc.id, ...doc.data()}];
          break;
        case "original":
          original = [...original, {id: doc.id, ...doc.data()}];
          break;
        case "trending":
          trending = [...trending, {id: doc.id, ...doc.data()}];
          break;    
        default:
          
          break;
      }

    });

    dispatch(setDisneyMovies({
      popular: popular,
      hollywood: hollywood,
      newTo: newTo,
      original: original,
      trending: trending
    }))
   })
    //console.log('working');
  }, []);


  



  return (
    <div>
        
        <Container>
            <Banner />
            <Brand />
            <Original />
            <NewtoDisney />
            <Popular />
            <Trending />
            <Hollywood />
           
          
        </Container>
    </div>
  )
}
const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    display: block;
    overflow-x: hidden;
    background: url(${background})center/cover no-repeat;
`;
export default Home

