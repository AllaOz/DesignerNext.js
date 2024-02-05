import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './services.module.scss';
import data from '../../app/data/data.json';
import Header from '../../app/components/Header/Header';
import Footer from '../../app/components/Footer/Footer';



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
    <Header />
    <div className={styles.backgroundImg}>
      <div className={styles.wrapperCard}>
      <h2 className={styles.headingTwo}>Interior Design Services</h2>
      <div className={styles.paragraph_container}>
      <p className={styles.paragraphAboutme}>Transform your space with elegance and innovation! I'm offering a <b>free consultation</b> to bring your vision to life, whether it's a sophisticated home or cutting-edge office design. Contact me now to take the first step toward creating a space that reflects your unique style and personality.
</p></div>
<button className={styles.contactmeBtn}>
            Contact me
        </button>
        
      </div>
      <div  className={styles.card_container} >
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
          <div  className={styles.card_container} >
          <div className={styles.card_box_modal}>
          <div className={styles.card_name}>
            <h3 className={styles.headingThree}>{selectedService.name}</h3></div>
            <li className={styles.paragraphCard}>{selectedService.four}</li>
            <li className={styles.paragraphCard}>{selectedService.five}</li>
            <li className={styles.paragraphCard}>{selectedService.six}</li>
            <li className={styles.paragraphCard}>{selectedService.seven}</li>
            <div className={styles.card_btn}><button className={styles.learnMoreBtn}onClick={closeModal}>Go back</button>
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
