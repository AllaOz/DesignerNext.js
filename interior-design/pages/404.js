import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/styles/notfound.module.scss';
import Header from '../components/ui/Header/Header';
import Footer from '../components/ui/Footer/Footer';

function NotFound() {
    return (

        <>
            <Head>
                <title>Page Not Found - Bureau Soul Concept</title>
                <meta name="description" content="Page not found. Return to Bureau Soul Concept homepage for interior design services in Dubai." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Page Not Found - Bureau Soul Concept" />
                <meta property="og:description" content="Page not found. Return to Bureau Soul Concept homepage." />
                <meta property="og:image" content="https://www.soulcnpt.com/og-image.png" />
                <meta property="og:image:secure_url" content="https://www.soulcnpt.com/og-image.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="631" />
                <meta property="og:image:height" content="611" />
                <meta property="og:image:alt" content="Bureau Soul Concept Logo" />
                <link rel="icon" href="/favicon-32.png" />
            </Head>
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