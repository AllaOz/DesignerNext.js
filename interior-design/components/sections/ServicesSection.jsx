import React, { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import styles from '../styles/services.module.scss';
import data from '../../data/data.json';

const ServicesSection = () => {
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
        <div className={styles.wrapperCard}>
            <div className={styles.paragraph_container}>
                <h2 className={styles.headingTwo}>Interior Design Services</h2>
                <p className={styles.paragraphAboutme}>Transform your space with elegance and innovation! I&apos;m offering a free consultation to bring your vision to life. Contact me now to take the first step toward creating a space that reflects your unique style and personality.
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
                            <h3 className={styles.headingThree}>{service.name}</h3>
                        </div>
                        <ul>
                            <li className={styles.paragraphCard}>{service.one}</li>
                            <li className={styles.paragraphCard}>{service.two}</li>
                            <li className={styles.paragraphCard}>{service.three}</li>
                        </ul>
                        <div className={styles.card_btn}>
                            <button className={styles.learnMoreBtn} onClick={() => openModal(service)}>Learn more</button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className={styles['modal-container']}
                overlayClassName={styles['modal-overlay']}
            >
                {selectedService && (
                    <>
                        <div className={styles.card_container}>
                            <div className={styles.card_box_modal}>
                                <div className={styles.card_name_modal}>
                                    <h3 className={styles.headingThree}>{selectedService.name}</h3>
                                </div>
                                <li className={styles.paragraphCard}>{selectedService.four}</li>
                                <li className={styles.paragraphCard}>{selectedService.five}</li>
                                <li className={styles.paragraphCard}>{selectedService.six}</li>
                                <li className={styles.paragraphCard}>{selectedService.seven}</li>
                                <div className={styles.card_btn}>
                                    <button className={styles.learnMoreBtn} onClick={closeModal}>Go back</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default ServicesSection;
