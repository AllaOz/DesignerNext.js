import React from 'react';
import styles from '../Body/body.module.scss';
import Image from 'next/image'
import  Link  from 'next/link';
import Header from '../../app/components/Header/Header';



const Main = () => {
    return (
        <>
        <Header /> 
    <div className={styles.twoContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.textContainer}>
        <h2 className={styles.headingTwo}>Soul Decore & Dariya Amadi</h2>
        <p className={styles.paragraph}>Designing spaces where style meets sustainability, making every design a masterpiece.  </p>
       <p className={styles.paragraphAboutme}>Embrace eco-friendly materials and innovative technologies to create a harmonious blend of aesthetic appeal and environmental consciousness in each  crafted space.
       </p>
        <Link href='/Projects/Projects'>
        <button className={styles.freeConsultationBtn}>
            VIEW MY PORTFOLIO
        </button>
        </Link>
        </div>
        </div>

    
        <div className={styles.rightContainer}>
        <Image className={styles.lampsImg}
         src="/Lamps.jpg"
         width={500}
      height={500}
          alt="Lamps" />
        </div>
    </div>
    </>
    );
};


export default Main;