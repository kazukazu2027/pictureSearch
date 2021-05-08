import './App.css';
import React from 'react';
import styled from 'styled-components';
import SearchMain from './components/SearchMain';
import Header from './components/Header';
import logo from './pixabay.png';


function App() {
  return (
    <SContainer>
      <SLogo src={logo} />
      <Header />
      <SearchMain />
    </SContainer>
  );
}

const SContainer = styled.div`
  margin: 0 auto;
  width : 80%;
  text-align:center;
`;

const SLogo = styled.img`
  width:20%;
  margin-top:20px;
  @media(max-width:768px){
    width:40%;
    margin-top:30px;
  }
`;


export default App;
