import React from 'react';
import  Link  from 'next/link';
import Image from 'next/image';
import styles from '../Aboutme/aboutme.module.scss';
import Header from '../../app/components/Header/Header';
import Footer from '../../app/components/Footer/Footer';


const Aboutme = () => {
    return (
      <>
      <Header /> 
    <div className={styles.mainContainer}>
      
        <div className={styles.downContainer}>
        <Image className={styles.aboutmeImg}
         src="/AboutMeBlue.jpg"
         width={550}
      height={500}
         alt="Dariya Amadi's photo" />
        </div>
        
        <div className={styles.upContainer}>
        <h2 className={styles.headingTwo}>About me</h2>
        <p className={styles.paragraphAboutme}>Hello! I'm a Dubai-based interior designer dedicated to seamlessly blending luxury with eco-conscious design. Committed to sustainability, I create spaces in harmony with both opulence and responsible living. My designs prioritize functionality and green principles for a mindful and stylish living experience. Let's say hello to a collaboration that redefines your space with an eco-friendly touch.</p>
        <Link href="/NotFound/NotFound">
        <button className={styles.contactmeBtn}>
            Contact me
        </button>
        </Link>
        </div>
    </div>
    <Footer />
    </>
    );
};


export default Aboutme;