import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../components/styles/contacts.module.scss';
import Image from 'next/image'
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';
import Form from '../components/ui/Form/Form';



function Contacts() {
  return (
    <>
      <Head>
        <title>Contact Bureau Soul Concept - Dariya Amadi</title>
        <meta name="description" content="Get in touch with Bureau Soul Concept for your interior design needs. Contact Dariya Amadi for a free consultation in Dubai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.soulcnpt.com/contacts" />
        <meta property="og:title" content="Contact Bureau Soul Concept - Dariya Amadi" />
        <meta property="og:description" content="Get in touch with Bureau Soul Concept for your interior design needs. Contact Dariya Amadi for a free consultation in Dubai." />
        <meta property="og:image" content="https://www.soulcnpt.com/og-image.png" />
        <meta property="og:image:secure_url" content="https://www.soulcnpt.com/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bureau Soul Concept Logo" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Contact Bureau Soul Concept - Dariya Amadi" />
        <meta property="twitter:description" content="Get in touch with Bureau Soul Concept for your interior design needs." />
        <meta property="twitter:image" content="https://www.soulcnpt.com/og-image.png" />
        <link rel="icon" href="/favicon-32.png" />
      </Head>
      <Header />
      <div className={styles.twoContainerWhy}>
        <div className={styles.rightContainerWhy}>
          <Image className={styles.lampsImg}
            src="/contacts.jpg"
            width={500}
            height={500}
            alt="blue armchair on a dark blue background" />
        </div>

        <div className={styles.leftContainerWhy}>
          <div className={styles.textContainer}>
            <h2 className={styles.headingTwo}>Contact us</h2>
            <Form />
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/phone-call.png"
                    width={25}
                    height={25}
                    alt="phone icon" />
                </a></div>
              <div className={styles.gridItem}>
                <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">+971 55 554 5167</a>
              </div>
              <div className={styles.gridItem}>
                <a href="https://www.instagram.com/bureausoulcbpt" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/instagram (3).png"
                    width={25}
                    height={25}
                    alt="instagram icon" /></a></div>
              <div className={styles.gridItem}><a href="https://www.instagram.com/bureausoulcbpt" target="_blank" rel="noopener noreferrer">@bureausoulcnpt</a></div>
              <div className={styles.gridItem}>
                <Image
                  src="/email (1).png"
                  width={25}
                  height={25}
                  alt="email icon" />
              </div>
              <div className={styles.gridItem}><a href="mailto:hello@soulcnpt.com">hello@soulcnpt.com</a></div>
              <div className={styles.gridItem}><a href="https://t.me/soulcnpt" target="_blank" rel="noopener noreferrer"><Image
                src="/telegram (1).png"
                width={25}
                height={25}
                alt="telegram icon" /></a></div>
              <div className={styles.gridItem}><a href="https://t.me/soulcnpt" target="_blank" rel="noopener noreferrer">@soulcnpt</a></div>


            </div>
          </div>
        </div>



      </div>
      <Footer />
    </>
  );
};

export default Contacts;