import React from 'react';
import  Link  from 'next/link';
import styles from './notfound.module.scss'; 
import Header from '../../app/components/Header/Header';
import Footer from '../../app/components/Footer/Footer';

function NotFound () {
    return (

        <>
        <Header />
        <div className={styles.notfound}>
           <div className={styles.notfoundcontainer}>
           <p className={styles.notfoundheading}>404 Error: Looks like the pixels are redecorating. Our apologies for the unexpected remodeling</p>
           <Link href='/' className={styles.notfoundlink}><div>Go Back Home</div></Link>
        </div>
        </div>
        <Footer />
        </>
    )

    
}

export default NotFound;