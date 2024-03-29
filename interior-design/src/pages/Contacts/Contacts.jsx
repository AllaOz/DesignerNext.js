import React, { useState } from 'react';
import styles from '../Contacts/contacts.module.scss';
import Image from 'next/image'
import Header from '../../app/components/Header/Header';
import Form from '../../app/components/Form/Form';



function Contacts ()  {
    return (
        <>
        <Header/>
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
            <h2 className={styles.headingTwo}>Contact me</h2>
<Form/>
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
    <a href="https://www.instagram.com/souldecore" target="_blank" rel="noopener noreferrer">
  <Image
          src="/instagram (3).png"
          width={25}
          height={25}
          alt="instagram icon" /></a></div>
          <div className={styles.gridItem}><a href="https://www.instagram.com/souldecore" target="_blank" rel="noopener noreferrer">@souldecore</a></div>
  <div className={styles.gridItem}>
  <Image
          src="/email (1).png"
          width={25}
          height={25}
          alt="email icon" />
  </div>
  <div className={styles.gridItem}><a href="mailto:info@souldecore.com">info@souldecore.com</a></div>
  <div className={styles.gridItem}><a href="https://t.me/souldecore" target="_blank" rel="noopener noreferrer"><Image
          src="/telegram (1).png"
          width={25}
          height={25}
          alt="telegram icon" /></a></div>
          <div className={styles.gridItem}><a href="https://t.me/souldecore" target="_blank" rel="noopener noreferrer">@souldecore</a></div>
  
  
</div>
            </div>
            </div>
            
    
            
        </div>
        </>
        );
    };
    
export default Contacts;