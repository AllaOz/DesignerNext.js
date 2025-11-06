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
                        <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <Image
                                src="/phone-call.png"
                                width={25}
                                height={25}
                                alt="Contact Bureau Soul Concept interior design"
                                className={styles.animatedIcon}
                            />
                        </a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">+971 55 554 5167</a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://www.instagram.com/bureausoulcnpt" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <Image
                                src="/instagram (3).png"
                                width={25}
                                height={25}
                                alt="Bureau Soul Concept Instagram interior design projects"
                                className={styles.animatedIcon}
                            />
                        </a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://www.instagram.com/bureausoulcnpt" target="_blank" rel="noopener noreferrer">@bureausoulcnpt</a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="mailto:hello@soulcnpt.com" className={styles.iconLink}>
                            <Image
                                src="/email (1).png"
                                width={25}
                                height={25}
                                alt="Email Bureau Soul Concept interior design consultation"
                                className={styles.animatedIcon}
                            />
                        </a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="mailto:hello@soulcnpt.com">hello@soulcnpt.com</a>
                    </div>
                    <div className={styles.gridItem}>
                        <a href="https://t.me/soulcnpt" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                            <Image
                                src="/telegram (1).png"
                                width={25}
                                height={25}
                                alt="Bureau Soul Concept Telegram interior design services"
                                className={styles.animatedIcon}
                            />
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
