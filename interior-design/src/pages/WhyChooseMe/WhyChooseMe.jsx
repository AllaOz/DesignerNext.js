import React from 'react';
import styles from '../WhyChooseMe/whychooseme.module.scss';
import  Link  from 'next/link';
import Image from 'next/image';


const WhyChooseMe = () => {
    return (
        <div className={styles.twoContainerWhy}>
            <div className={styles.leftContainerWhy}>
            <div className={styles.textContainer}>
            <h2 className={styles.headingTwo}>Why choose me</h2>
            <p className={styles.paragraphWhyChooseMe}> <b>Global Furniture Market:</b> Handpicked furniture from the famous furniture manufacturer of the world, add diverse styles to your home.  </p>
            <p className={styles.paragraphWhyChooseMe}> <b>Custom Carpets:</b> Personalize your floors with made-to-order carpets in any designs and colors.  </p>
            <p className={styles.paragraphWhyChooseMe}> <b>Sustainable Choices:</b> Embrace eco-friendly materials for both furniture and carpets, contributing to a greener and more conscious living environment.
  </p>
            <p className={styles.paragraphWhyChooseMe}> <b>Innovative Designs:</b> Stay ahead in style with a collection that incorporates the latest trends and innovative designs, ensuring your space is both timeless and contemporary  </p>
            <br></br>
            <Link href='./NotFound/notfound'>
            <button className={styles.learnMoreBtn}>
                Contact me
            </button>
            </Link>
            </div>
            </div>
    
            <div className={styles.rightContainerWhy}>
            <Image className={styles.lampsImg}
             src="/blue-armchair.jpg"
             width={500}
          height={500}
              alt="blue armchair on a dark blue background" />
            </div>
        </div>
        );
    };
    
export default WhyChooseMe;