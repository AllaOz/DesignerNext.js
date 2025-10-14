import React, { useState } from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.cardHeader}>

      <nav className={styles.nav}>
        <Link href='/'>
          <Image src="/Bureau_Soul_Logo.png" className={styles.logo} width={70} height={70} alt="logo" />
        </Link>
        {nav && <div className={styles.overlay} onClick={() => setNav(false)} />}
        <ul className={nav ? `${styles.menu} ${styles.active}` : styles.menu}>

          <li>
            <Link href="/projects" onClick={() => setNav(false)}>Projects</Link>
          </li>
          <li>
            <Link href="/aboutme" onClick={() => setNav(false)}>About me</Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setNav(false)}>Services</Link>
          </li>
          <li>
            <Link href="/contacts" onClick={() => setNav(false)}>Contacts</Link>
          </li>
          <li><a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">
            <button className={styles.learnMoreBtn} onClick={() => setNav(false)}>Contact us</button>
          </a>
          </li>
        </ul>
        <div
          className={styles.hamburgerMenu}
          role="button"
          tabIndex={0}
          onClick={() => setNav(!nav)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setNav(!nav);
          }}
        >
          {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={30} />}
        </div>
      </nav>

    </header>
  );
}

export default Header;
