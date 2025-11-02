import React from 'react';
import styles from '../styles/contacts.module.scss';
import Image from 'next/image'
import Form from '../ui/Form/Form';

const ContactsSection = () => {
    return (
        <div className={styles.twoContainerWhy}>
            <div className={styles.rightContainerWhy}>
                <Image className={styles.lampsImg}
                    src="/contacts.jpg"
                    width={500}
                    height={500}
                    alt="Interior design consultation" />
            </div>

            <div className={styles.leftContainerWhy}>
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
                        </a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">+971 55 554 5167</a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://www.instagram.com/bureausoulcnbt" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/instagram (3).png"
                                width={25}
                                height={25}
                                alt="instagram icon" />
                        </a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://www.instagram.com/bureausoulcnbt" target="_blank" rel="noopener noreferrer">@bureausoulcnpt</a>
                    </div>
                    <div className={styles.gridItem}>
                        <Image
                            src="/email (1).png"
                            width={25}
                            height={25}
                            alt="email icon" />
                    </div>
                    <div className={styles.gridItem}>
                        <a href="mailto:hello@soulcnpt.com">hello@soulcnpt.com</a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://t.me/soulcnpt" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/telegram (1).png"
                                width={25}
                                height={25}
                                alt="telegram icon" />
                        </a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://t.me/soulcnpt" target="_blank" rel="noopener noreferrer">@soulcnpt</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactsSection;
