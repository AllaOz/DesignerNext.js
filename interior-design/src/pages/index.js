
import React from 'react';
import Body from './Body/Body';
import Aboutme from './Aboutme/Aboutme';
import Services from './Services/Services';
import Header from '../app/components/Header/Header';
import Footer from '../app/components/Footer/Footer';


function Home() {
  return (
    <>
     <Header /> 
      <Body />
      <Aboutme />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
