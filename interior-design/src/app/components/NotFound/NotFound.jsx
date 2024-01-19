import React from 'react';
import  Link  from 'next/link';
import styles from './notfound.module.scss'; 

function NotFound () {
    return (

        <div className={styles.notfound}>
           <div className={styles.notfoundcontainer}>
           <p className={styles.notfoundheading}>404 Error: Looks like the pixels are redecorating. Our apologies for the unexpected remodeling</p>
           <Link href='/' className={styles.notfoundlink}><div>Go Back Home</div></Link>
        </div>
        </div>
    )

    
}

export default NotFound;