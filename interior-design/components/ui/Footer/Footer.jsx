
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
        <p className={styles.copyright}>&copy; {currentYear} Bureau Soul Concept</p>
      </div>

      <Link href='/'>
        <Image
          src="/Bureau_Soul_Logo.png"
          className={styles.logoFooter}
          width={50}
          height={50}
          alt="Bureau Soul Logo"
        />
      </Link>
    </footer>
  );
}

export default Footer;
