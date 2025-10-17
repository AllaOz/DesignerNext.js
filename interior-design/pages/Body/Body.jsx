import React from 'react';
import styles from '../../components/styles/body.module.scss';
import Image from 'next/image'
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <div className={styles.twoContainer}>
                <div className={styles.leftContainer}>
                    <h1 className={styles.headingTwo}>Bureau Soul Concept & Dariya Amadi</h1>
                    <p className={styles.paragraph}>Designing spaces where style meets sustainability, making every design a masterpiece.</p>
                    <p className={styles.paragraphAboutme}>Embrace eco-friendly materials and innovative technologies to create a harmonious blend of aesthetic appeal and environmental consciousness in each crafted space.</p>
                    <div className={styles.buttonContainer}>
                        <a href='#projects'>
                            <button className={styles.freeConsultationBtn}>
                                View Portfolio
                            </button>
                        </a>
                        <a href='#contacts'>
                            <button className={styles.learnMoreBtn}>
                                Get Consultation
                            </button>
                        </a>
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