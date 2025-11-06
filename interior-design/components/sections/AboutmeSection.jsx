import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/aboutme.module.scss';

const AboutmeSection = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.downContainer}>
                    <Image className={styles.aboutmeImg}
                        src="/aboutme_main.jpg"
                        width={500}
                        height={500}
                        alt="Dariya Amadi's photo" />
                    <Image className={styles.aboutmeImgSmall}
                        src="/aboutme_lamp.jpeg"
                        width={250}
                        height={250}
                        alt="Decorative lamp" />
                </div>

                <div className={styles.upContainer}>
                    <h2 className={styles.headingTwo}>About me</h2>
                    <p className={styles.paragraphAboutme}>Hello! I&apos;m a Dubai-based interior designer dedicated to seamlessly blending luxury with eco-conscious design. </p>
                    <p className={styles.paragraphAboutme}> My designs prioritize functionality, green principles for a mindful and stylish living experience. Let&apos;s say hello to a collaboration that redefines your space with an eco-friendly touch.</p>
                    <p className={styles.paragraphAboutme}>You are the soul of everything we do. We are a team of dedicated professionals who love what we do and take pride in every detail.</p>
                    <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">
                        <button className={`${styles.freeConsultationBtn} ${styles.spaceBelow}`}>
                            free consultation
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default AboutmeSection;
