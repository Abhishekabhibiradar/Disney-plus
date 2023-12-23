import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
//import admin from '../components/images/admin.png';
import logo from '../components/images/logo.svg'
import home from '../components/images/home-icon.png'
import searchIcon from '../components/images/search-icon.svg'
import watchIcon from '../components/images/plus.png'
import origIcon from '../components/images/originals.png'
import movieIcon from '../components/images/movie-icon.svg'
import seriesIcon from '../components/images/series-icon.svg'
import shutdown from '../components/images/shutdown.png';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto, setLoginState, setLogoutState } from './Redux/Reducers/UserReducer';
import { auth, provider } from '../Firebase';

const Navbar = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto)
  const [Toggler, setToggler] = useState(false); 
  const ifPopupOpen =() => setToggler(!Toggler);

  useEffect(() =>{

    auth.onAuthStateChanged(async (user)=>{
        if(user){
          dispatch(setLoginState({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL
          }));
          history.push("/home");
        }
    })

  }, [dispatch, history])

  const SignIn =()=>{
    auth.signInWithPopup(provider).then((response) =>{
      //console.log(response)
      let user = response.user;
      dispatch( setLoginState({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL
      }));
      history.push("/home");
    })
  }

  const SignOut = () =>{
    auth.signOut().then(() =>{
      dispatch(setLogoutState());
      history.push("/");
    })
  }
  return (
    <div>
        <Nav>
            <Navbrand>
              <NavLink to="/"><img src={logo} alt="disney/logo" /></NavLink>
            </Navbrand>
            {
              !userName ? (
                <LoginButton onClick={SignIn}>Log In</LoginButton>
              ) : <> 
                      <Menulink>
                      <li><NavLink className="nav-link" to="/home"><img style={{width: '0.8rem', height: '0.8rem'}} src={home} alt={home} /><span>Home</span></NavLink></li>
                      <li><NavLink className="nav-link" to="/search"><img src={searchIcon} alt={searchIcon} /><span>Search</span></NavLink></li>
                     <li><NavLink className="nav-link" to="/watchlist"><img src={watchIcon} alt={watchIcon} /><span>WATCHLIST</span></NavLink></li>
                     <li><NavLink className="nav-link" to="/originals"><img src={origIcon} alt={origIcon} /><span>ORIGINALS</span></NavLink></li>
                   <li><NavLink className="nav-link" to="/movies"><img src={movieIcon} alt={movieIcon} /><span>MOVIES</span></NavLink></li>
                      <li><NavLink className="nav-link" to="/series"><img src={seriesIcon} alt={seriesIcon} /><span>SERIES</span></NavLink></li>

                    </Menulink>
                    <UserAuth><img src={userPhoto} onClick={ifPopupOpen} alt="admin/disney" /></UserAuth>

                    <PopupMenu activeState={Toggler}>
                      <li><NavLink className="nav-link" to="/home"><img style={{width: '0.8rem',height: '0.8rem'}}src={home} alt={home} /><span>Home</span></NavLink></li>
                      <li><NavLink onClick={SignOut} className="nav-link" to="#"><img style={{width: '0.8rem',height: '0.8rem'}}src={shutdown} alt={shutdown} /><span>Sign Out</span></NavLink></li>
                    </PopupMenu>
                </>
            }
        </Nav>
    </div>
  );
};

const LoginButton = styled.button`
  font-size: 1.2rem;
  color: #fff;
  cursor: pointer;
  padding: 5px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  transition: all 0.2s ease 0s;
  background-color: rgba(0, 0, 0, 0.6);
  @media screen and (min-width: 250px) and (max-width: 550px){
    font-size: 0.8rem;
    padding: 4px 13px;
  }
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const Nav = styled.nav`
  display: flex;
  min-height: 7vh;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  padding: 0.5rem 3rem;
  opacity: 1;
  z-index: 2500;

`;

const Navbrand = styled.div`
    width: 101px;
    height: auto;
    object-position: center;

    img{
        width: 100%;
        height: auto;
        object-fit: fill;
    }
`;

const Menulink = styled.div`

@media screen and (min-width: 280px) and (max-width:991px){
  display: none;
}

display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
flex-wrap: row wrap;
flex-shrink: 0;
justify-content: flex-start;
margin-right: auto;
margin-left: 3rem;

    li{
      list-style: none;
      > .nav-link{
        display: flex;
        align-items: center;
        text-decoration: none;
        position: relative;
        padding: 10px;

        img{
          width: 1.3rem;
          height: 1.3rem;
          object-fit: contain;
        }
        span{
          color: #fff;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.08;
          padding: 0.5remm;
          margin-top: 5px;
          position: relative;

          &::before{
            position: absolute;
            content: "";
            top: 100%;
            left: 0;
            right: 0;
            width: 0%;
            height: 2px;
            background: #f9f9f9;
            transition: all 0.7s cubic-bezier(0.445, 0.05, 0.55, 0.95);
          }
        }
      }

      &:hover{
      
        
        span::before{
          width: 100%;

        }
      }
    }
`;
const UserAuth = styled.div`
  width: 50px;
  height: 50px;
  object-position: center;
  position: relative;

  img{
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 100px;
  }
`;
const PopupMenu = styled.div`
  position: absolute;
  top: 7vh;
  right: 3.5rem;
  opacity: 1;
  z-index: 2500;
  padding: 0.5rem 1rem;
  background-color: #040714;
  border-radius: 0.345rem;
  border: 1.3px solid rgba(151, 151, 151, 1);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;

  display: ${event => event.activeState ? "flex" : "none"};
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
li{
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-bottom: 1.3px solid rgba(151, 151, 151, 1);
    list-style: none;
    > .nav-link{
      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;

        img{
          width: 1.3rem;
          height: 1.3rem;
          object-fit: contain;
        }
        span{
          color: #fff;
          font-size: 1.2rem;
          font-weight: 300;
          letter-spacing: 1px;
          line-height: 1.08;
          padding: 0.5remm;
          margin-top: 5px;
          position: relative;
        }
      }
    }
`;
export default Navbar