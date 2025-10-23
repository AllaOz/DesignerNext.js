
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
import AnimatedSection from '../components/AnimatedSection';


function Home() {
  return (
    <>
      <Head>
        <title>Bureau Soul Concept and Dariya Amadi</title>
        <meta name="description" content="Interior design solutions from Dariya Amadi and Bureau Soul Concept, an interior designer based in Dubai. Collaborating with global furniture companies import of furniture from all over the world, curating exquisite furnishings to elevate your space, crafting bespoke carpets of any size design, bringing your vision to life with unparalleled elegance and sophistication." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/icon-180-apple.png" />
      </Head>

      <Header />
      <section id="body">
        <Body />
      </section>
      <AnimatedSection id="aboutme" animationType="left" threshold={0.15}>
        <AboutmeSection />
      </AnimatedSection>
      <AnimatedSection id="services" animationType="default" threshold={0.15}>
        <ServicesSection />
      </AnimatedSection>
      <AnimatedSection id="whychooseme" animationType="right" threshold={0.15}>
        <WhyChooseMeSection />
      </AnimatedSection>
      <AnimatedSection id="projects" animationType="scale" threshold={0.15}>
        <ProjectsSection />
      </AnimatedSection>
      <AnimatedSection id="contacts" animationType="default" threshold={0.15}>
        <ContactsSection />
      </AnimatedSection>
      <Footer />
    </>
  );

}
export default Home;
