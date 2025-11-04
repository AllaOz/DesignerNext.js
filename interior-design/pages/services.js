import React, { useState } from 'react';
import Head from 'next/head';
import Modal from 'react-modal';
import Link from 'next/link';
import styles from '../components/styles/services.module.scss';
import data from '../data/data.json';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';



const Card = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>Interior Design Services - Bureau Soul Concept</title>
        <meta name="description" content="Professional interior design services by Bureau Soul Concept. From concept to execution, we create luxurious and eco-friendly spaces in Dubai." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.soulcnpt.com/services" />
        <meta property="og:title" content="Interior Design Services - Bureau Soul Concept" />
        <meta property="og:description" content="Professional interior design services by Bureau Soul Concept. From concept to execution, we create luxurious and eco-friendly spaces in Dubai." />
        <meta property="og:image" content="https://www.soulcnpt.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Interior Design Services - Bureau Soul Concept" />
        <meta property="twitter:description" content="Professional interior design services by Bureau Soul Concept." />
        <meta property="twitter:image" content="https://www.soulcnpt.com/og-image.png" />
        <link rel="icon" href="/favicon-32.png" />
      </Head>
      <Header />
      <div className={styles.wrapperCard}>
        <div className={styles.paragraph_container}>
          <h2 className={styles.headingTwo}>Interior Design Services</h2>
          <p className={styles.paragraphAboutme}>Transform your space with elegance and innovation! I’m offering a free consultation to bring your vision to life. Contact me now to take the first step toward creating a space that reflects your unique style and personality.
          </p>
          <a href="#contacts">
            <button className={styles.freeConsultationBtn}>
              free consultation
            </button>
          </a>
        </div>

        <div className={styles.card_container} >
          {data.map((service) => (

            <div className={styles.card_box} key={service.id} onClick={() => openModal(service)}>
              <div className={styles.card_name}>
                <h3 className={styles.headingThree}>{service.name}</h3></div>
              <ul>
                <li className={styles.paragraphCard}>{service.one}</li>
                <li className={styles.paragraphCard}>{service.two}</li>
                <li className={styles.paragraphCard}>{service.three}</li>
              </ul>
              <div className={styles.card_btn}>
                <button className={styles.learnMoreBtn} onClick={() => openModal(service)}>Learn more</button>
              </div></div>

          ))}
        </div>

        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className={styles['modal-container']}
        >
          {selectedService && (
            <>
              <div className={styles.card_container} >
                <div className={styles.card_box_modal}>
                  <div className={styles.card_name_modal}>
                    <h3 className={styles.headingThree}>{selectedService.name}</h3></div>
                  <li className={styles.paragraphCard}>{selectedService.four}</li>
                  <li className={styles.paragraphCard}>{selectedService.five}</li>
                  <li className={styles.paragraphCard}>{selectedService.six}</li>
                  <li className={styles.paragraphCard}>{selectedService.seven}</li>
                  <div className={styles.card_btn}><button className={styles.learnMoreBtn} onClick={closeModal}>Go back</button>
                  </div>
                </div>
              </div>
            </>

          )}
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default Card;
