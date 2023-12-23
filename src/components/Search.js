import React, { useEffect ,useState} from 'react';
import dbConfig from '../Firebase';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

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


const Search = () => {
  const dispatch=useDispatch(); 
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
 
const [filteredMovies, setFilteredMovies] = useState([]);

  
useEffect(() => {
  dbConfig.collection('Movies')
    .get()
    .then((snapshot) => {
      const results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setSearchResults(results);
      dispatch(setDisneyMovies({
     
      }));
    });
}, [dispatch]);

  const handleSearch = () => {
    const filteredResults = searchResults.filter((result) =>
      result.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update your state with filtered results if needed
    // For example, set a new state variable like `filteredMovies`
    // and assign `filteredResults` to it
    setFilteredMovies(filteredResults);
  };
  

  





 
  let popular = [];
  let hollywood = [];
  let newTo = [];
  let original = [];
  let trending = [];

 
  useEffect(() => {
   dbConfig.collection("Movies").onSnapshot((snapshot)=>{

    snapshot.docs.map((doc) =>{
     

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
    <>
  
    <Container>
      <div style={{display:"flex",flexDirection:"column",marginBottom:"10px",position:"absolute",left:"100px"}}>
   
    <h1 style={{ fontSize: '50px', color: 'lightblue', fontWeight: 'bold' ,zIndex:1000,padding:"10px"}}> Search Your Favorite<br></br> Show</h1>
    <SearchBox>
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchBox>
      </div>
      <div style={{display:"flex",flexDirection:"column",marginBottom:"10px",position:"absolute",right:"200px"}}>
        <div style={{width:"300px"}}>
      {filteredMovies.map((movie) => (
        <NavLink to={`/detail/${movie.id}` }style={{ textDecoration: 'none', color: 'lightblue' }}>
       <div key={movie.id}>
       <img  style={{width:"400px",height:"400",}}  src={movie.CardImg} alt={movie.Title} />
      <h2 style={{zIndex:1000}}>{movie.Title}</h2>
      <div>
      <p style={{zIndex:1000,}}>{movie.Description}</p>
     
      </div>
     
      </div>
      </NavLink>
    
    
  ))}
  
  </div>
  </div>

  
    </Container>
 <Container2>
    <Original />
<NewtoDisney />
<Popular />
<Trending />
<Hollywood />
</Container2>


</>
  );
};

const Container2 = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    display: block;
    overflow-x: hidden;
    background: url(${background})center/cover no-repeat;
`;

const Container = styled.div`
  /* Aligns at the top */
  position: relative;
    min-height: calc(100vh - 250px);
    padding: 0 calc(3.5vw + 5px);
    display: block;
    overflow-x: hidden;
    background: url(${background})center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between ;
  padding:20px;
  border: 1px solid #ccc;
  border-radius: 50px;
  width:500px;
  padding: 10px;
  background-color: #fff;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  width:300px;
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 50px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  
`;

export default Search;
