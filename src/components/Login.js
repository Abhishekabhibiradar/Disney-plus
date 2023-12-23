import React from 'react';
import styled from 'styled-components';
import Adverstise from './Login/Adverstise';
import Banner from './Login/Banner';
import Devices from './Login/Devices';
import DownloadNow from './Login/DownloadNow';
import Gridtheme from './Login/Gridtheme';
import Groupwatch from './Login/groupwatch';
import Marvelstudio from './Login/Marvelstudio';
import Stream from './Login/stream';

const Login = () => {
  return (
    <>
      <Main>
        <Banner />
        <Stream />
        <Groupwatch/>
        <Marvelstudio/>
        <Gridtheme />
        <DownloadNow />
        <Adverstise />
        <Devices />
      </Main>
    </>
  );
};

const Main = styled.main`
  width: auto;
  height: auto;
  overflow: auto;
`;


export default Login;
