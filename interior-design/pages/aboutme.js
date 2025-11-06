import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../components/styles/aboutme.module.scss';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';



const Aboutme = () => {
    return (
        <>
            <Head>
                <title>About Dariya Amadi - Interior Designer in Dubai</title>
                <meta name="description" content="Meet Dariya Amadi, a Dubai-based interior designer dedicated to blending luxury with eco-conscious design. Functional, green, and stylish living experiences." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.soulcnpt.com/aboutme" />
                <meta property="og:title" content="About Dariya Amadi - Interior Designer in Dubai" />
                <meta property="og:description" content="Meet Dariya Amadi, a Dubai-based interior designer dedicated to blending luxury with eco-conscious design." />
                <meta property="og:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
                <meta property="og:image:secure_url" content="https://www.soulcnpt.com/icon-180-apple.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="180" />
                <meta property="og:image:height" content="180" />
                <meta property="og:image:alt" content="Bureau Soul Concept Logo" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:title" content="About Dariya Amadi - Interior Designer in Dubai" />
                <meta property="twitter:description" content="Meet Dariya Amadi, a Dubai-based interior designer dedicated to blending luxury with eco-conscious design." />
                <meta property="twitter:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
                <link rel="icon" href="/favicon-32.png" />
            </Head>
            <Header />
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
                    <h2 className={styles.headingTwo}>About us</h2>
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
            <div className={styles.blank} ></div>
            <Footer />
        </>
    );
};


export default Aboutme;