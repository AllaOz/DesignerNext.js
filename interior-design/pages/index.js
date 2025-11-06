
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
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.soulcnpt.com/" />
        <meta property="og:title" content="Bureau Soul Concept and Dariya Amadi" />
        <meta property="og:description" content="Interior design solutions from Dariya Amadi and Bureau Soul Concept, an interior designer based in Dubai. Collaborating with global furniture companies import of furniture from all over the world, curating exquisite furnishings to elevate your space, crafting bespoke carpets of any size design, bringing your vision to life with unparalleled elegance and sophistication." />
        {/* Use square icon for small logo format (summary card) - shows logo on left */}
        <meta property="og:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
        <meta property="og:image:secure_url" content="https://www.soulcnpt.com/icon-180-apple.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="180" />
        <meta property="og:image:height" content="180" />
        <meta property="og:image:alt" content="Bureau Soul Concept Logo" />
        
        {/* Twitter - summary card for small logo on left */}
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://www.soulcnpt.com/" />
        <meta property="twitter:title" content="Bureau Soul Concept and Dariya Amadi" />
        <meta property="twitter:description" content="Interior design solutions from Dariya Amadi and Bureau Soul Concept, an interior designer based in Dubai." />
        <meta property="twitter:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
        
        <link rel="icon" href="/favicon-32.png" />
        <link rel="apple-touch-icon" href="/icon-180-apple.png" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Bureau Soul Concept",
              "alternateName": "Bureau Soul Concept and Dariya Amadi",
              "description": "Interior design solutions from Dariya Amadi and Bureau Soul Concept, an interior designer based in Dubai. Collaborating with global furniture companies, importing furniture from all over the world, curating exquisite furnishings to elevate your space, crafting bespoke carpets of any size design, bringing your vision to life with unparalleled elegance and sophistication.",
              "url": "https://www.soulcnpt.com",
              "logo": "https://www.soulcnpt.com/icon-180-apple.png",
              "image": "https://www.soulcnpt.com/icon-180-apple.png",
              "serviceType": "Interior Design",
              "areaServed": {
                "@type": "City",
                "name": "Dubai"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971-55-554-5167",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Russian"]
              },
              "sameAs": [
                "https://www.instagram.com/bureausoulcbpt",
                "https://t.me/soulcnpt"
              ],
              "founder": {
                "@type": "Person",
                "name": "Dariya Amadi"
              }
            })
          }}
        />
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
