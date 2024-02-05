
import Link from 'next/link';
import styles from './footer.module.scss';
import Image from 'next/image';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        {/* Content for the social media section goes here */}
      </div>

      <div>
        <p className={styles.copyright}>&copy; {currentYear} Soul Decore</p>
      </div>

      <Link href='/'>
          <Image src="/logo.jpg" className={styles.logoFooter}
          width={50} 
          height={50}
          alt="logo" />
      </Link>
    </footer>
  );
}

export default Footer;
