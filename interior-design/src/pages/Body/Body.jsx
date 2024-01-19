import React from 'react';
import styles from '../Body/body.module.scss';
import Image from 'next/image'
import  Link  from 'next/link';


const Main = () => {
    return (
    <div className={styles.twoContainer}>
        <div className={styles.leftContainer}>
        <h2 className={styles.headingTwo}>Soul Decore & Dariya Amadi</h2>
        <p className={styles.paragraph}>Designing spaces where style meets sustainability, making every design a masterpiece</p>
        <Link href='/notfound'>
        <button className={styles.portfolioBtn}>
            Projects
        </button>
        </Link>
        </div>

    
        <div className={styles.rightContainer}>
        <Image className={styles.lampsImg}
         src="/Lamps.jpg"
         width={500}
      height={500}
          alt="Lamps" />
        </div>
    </div>
    );
};


export default Main;