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
                <p className={styles.paragraphCard}>Transform your space with elegance and innovation! I&apos;m offering a free consultation to bring your vision to life. Contact me now to take the first step toward creating a space that reflects your unique style and personality.
                </p>
                <a href="#contacts">
                    <button className={styles.freeConsultationBtn}>
                        free consultation
                    </button>
                </a>
            </div>

            <div className={styles.card_container} >
                {data.map((service) => (
                    <div key={service.id} className={styles.card}>
                        <h3 className={styles.headingThree}>{service.name}</h3>
                        <p className={styles.paragraphCard}>{service.one}</p>
                        <p className={styles.paragraphCard}>{service.two}</p>
                        <p className={styles.paragraphCard}>{service.three}</p>
                        <button className={styles.learnMoreBtn} onClick={() => openModal(service)}>
                            Learn More
                        </button>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Service Details"
                className={styles.modal}
                overlayClassName={styles.overlay}
            >
                {selectedService && (
                    <>
                        <div className={styles.modalHeader}>
                            <h2>{selectedService.name}</h2>
                            <button onClick={closeModal} className={styles.closeButton}>×</button>
                        </div>
                        <div className={styles.modalContent}>
                            <div className={styles.modalSection}>
                                <h4>What&apos;s Included:</h4>
                                <ul>
                                    <li>{selectedService.four}</li>
                                    <li>{selectedService.five}</li>
                                    <li>{selectedService.six}</li>
                                    {selectedService.seven && <li>{selectedService.seven}</li>}
                                    {selectedService.eight && <li>{selectedService.eight}</li>}
                                </ul>
                            </div>
                        </div>
                    </>
                )}
            </Modal>
        </div>
    );
};

export default ServicesSection;
