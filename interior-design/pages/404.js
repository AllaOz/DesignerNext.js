import React from 'react';
import Link from 'next/link';
import styles from '../components/styles/notfound.module.scss';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';

function NotFound() {
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