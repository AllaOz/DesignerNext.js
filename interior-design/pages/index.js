
import React from 'react';
import Body from './Body/Body';
import AboutmeSection from '../components/sections/AboutmeSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseMeSection from '../components/sections/WhyChooseMeSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactsSection from '../components/sections/ContactsSection';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';
import Head from 'next/head';


function Home() {
  return (
    <>
      <Head>
        <title>Soul Decore and Dariya Amadi</title>
        <meta name="description" content="Interior design solutions from Dariya Amadi and Soul Decore, an interior designer based in Dubai. Collaborating with global furniture companies import of furniture from all over the world, curating exquisite furnishings to elevate your space, crafting bespoke carpets of any size design, bringing your vision to life with unparalleled elegance and sophistication." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.png" />
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
      <section id="body">
        <Body />
      </section>
      <section id="aboutme">
        <AboutmeSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="whychooseme">
        <WhyChooseMeSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="contacts">
        <ContactsSection />
      </section>
      <Footer />
    </>
  );

}
export default Home;
