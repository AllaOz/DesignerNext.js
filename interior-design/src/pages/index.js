
import React from 'react';
import Body from './Body/Body';
import Aboutme from './Aboutme/Aboutme';
import Services from './Services/Services';
import WhyChooseMe from './WhyChooseMe/WhyChooseMe';
import Projects from './Projects/Projects';
import Contacts from './Contacts/Contacts';
import Header from '../app/components/Header/Header';
import Footer from '../app/components/Footer/Footer';
import Head from 'next/head';


function Home() {
  return (
    <>
    <Head>
      <title>Soul Decore and Dariya Amadi</title>
      <meta name="description" content="Interior design solutions from Dariya Amadi and Soul Decore, an interior designer based in Dubai. Collaborating with global furniture companies import of furniture from all over the world, curating exquisite furnishings to elevate your space, crafting bespoke carpets of any size design, bringing your vision to life with unparalleled elegance and sophistication." />
     <meta name="viewport" content="width=device-width, initial-scale=1"/>
     <link rel ="icon" href="/logo-icon.png" />
     <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
    </Head>
    
     <Header /> 
      <Body />
      <Aboutme />
      <Services />
      <WhyChooseMe />
      <Projects />

      <Contacts />
      <Footer />
    </>
  );

  }
export default Home;
