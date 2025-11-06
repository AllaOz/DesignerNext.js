import React, { useState } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


function Header() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <header className={styles.cardHeader}>
        <nav className={styles.nav}>
          <Link href='/'>
            <Image
              src="/Bureau_Soul_Logo.png"
              className={styles.logo}
              width={70}
              height={70}
              alt="Bureau Soul Logo"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <ul className={styles.desktopMenu}>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/aboutme">About us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
            <li>
              <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">
                <button className={styles.learnMoreBtn}>Contact us</button>
              </a>
            </li>
          </ul>

          {/* Hamburger Menu Button */}
          <div
            className={styles.hamburgerMenu}
            role="button"
            tabIndex={0}
            onClick={() => {
              console.log('Hamburger clicked, nav state:', nav);
              setNav(!nav);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') setNav(!nav);
            }}
          >
            <AiOutlineMenu size={30} />
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay - Outside header */}
      {nav && (
        <>
          <div className={styles.overlay} onClick={() => setNav(false)} />
          <div className={styles.menu}>
            {/* Close button inside menu */}
            <div className={styles.closeButton} onClick={() => setNav(false)}>
              <AiOutlineClose size={30} />
            </div>

            <Link href="/projects" onClick={() => setNav(false)}>Projects</Link>
            <Link href="/aboutme" onClick={() => setNav(false)}>About us</Link>
            <Link href="/services" onClick={() => setNav(false)}>Services</Link>
            <Link href="/contacts" onClick={() => setNav(false)}>Contacts</Link>
            <a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">
              <button className={styles.learnMoreBtn} onClick={() => setNav(false)}>Contact us</button>
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
