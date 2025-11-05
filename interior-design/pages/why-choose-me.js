import React from 'react';
import Head from 'next/head';
import styles from '../components/styles/whychooseme.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';


const WhyChooseMe = () => {
    return (
        <>
            <Head>
                <title>Why Choose Bureau Soul Concept - Dariya Amadi</title>
                <meta name="description" content="Discover why Bureau Soul Concept stands out: global furniture selection, custom carpets, sustainable choices, and innovative designs in Dubai." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.soulcnpt.com/why-choose-me" />
                <meta property="og:title" content="Why Choose Bureau Soul Concept - Dariya Amadi" />
                <meta property="og:description" content="Discover why Bureau Soul Concept stands out: global furniture selection, custom carpets, sustainable choices, and innovative designs." />
                <meta property="og:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
                <meta property="og:image:secure_url" content="https://www.soulcnpt.com/icon-180-apple.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="180" />
                <meta property="og:image:height" content="180" />
                <meta property="og:image:alt" content="Bureau Soul Concept Logo" />
                <meta property="twitter:card" content="summary" />
                <meta property="twitter:title" content="Why Choose Bureau Soul Concept - Dariya Amadi" />
                <meta property="twitter:description" content="Discover why Bureau Soul Concept stands out: global furniture selection, custom carpets, sustainable choices." />
                <meta property="twitter:image" content="https://www.soulcnpt.com/icon-180-apple.png" />
                <link rel="icon" href="/favicon-32.png" />
            </Head>
            <Header />
            <div className={styles.twoContainerWhy}>
                <div className={styles.leftContainerWhy}>

                    <h2 className={styles.headingTwo}>Why choose me</h2>
                    <p className={styles.paragraphWhyChooseMe}> <b>Global Furniture Market:</b> Handpicked furniture from the famous furniture manufacturer of the world, add diverse styles to your home.  </p>
                    <p className={styles.paragraphWhyChooseMe}> <b>Custom Carpets:</b> Personalize your floors with made-to-order carpets in any designs and colors.  </p>
                    <p className={styles.paragraphWhyChooseMe}> <b>Sustainable Choices:</b> Embrace eco-friendly materials for both furniture and carpets, contributing to a greener and more conscious living environment.
                    </p>
                    <p className={styles.paragraphWhyChooseMe}> <b>Innovative Designs:</b> Stay ahead in style with a collection that incorporates the latest trends and innovative designs, ensuring your space is both timeless and contemporary  </p>
                    <br></br>
                    <a href="#contacts">
                        <button className={styles.learnMoreBtn}>
                            Contact me
                        </button>
                    </a>

                </div>

                <div className={styles.rightContainerWhy}>
                    <Image className={styles.lampsImg}
                        src="/blue-armchair.jpg"
                        width={500}
                        height={500}
                        alt="blue armchair on a dark blue background" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default WhyChooseMe;