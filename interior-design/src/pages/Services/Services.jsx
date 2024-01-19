import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './services.module.scss';
import data from '../../app/data/data.json';


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
    <div>
      
      <div className={styles.wrapperCard}>
      <h2 className={styles.headingTwo}>Interior Design Services</h2>
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
      >
        {selectedService && (
          <>
          
          <div className={styles.card_name}>
            <h3 className={styles.headingThree}>{selectedService.name}</h3></div>
            <p>{selectedService.four}</p>
            <p>{selectedService.five}</p>
            <p>{selectedService.six}</p>
            <div className={styles.card_btn}><button className={styles.learnMoreBtn}onClick={closeModal}>Go back</button>
            </div>
          </>
          
        )}
      </Modal>
    </div>
  );
};

export default Card;
