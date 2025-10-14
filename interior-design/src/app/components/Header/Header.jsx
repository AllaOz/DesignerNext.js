import React, { useState } from 'react';
import styles from './Header.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';


function Header() {
  const [nav, setNav] = useState(false);


  return (
    <header className={styles.cardHeader}>

      <nav className={styles.nav}>
        <Link href='/'>
          <Image src="/logo.jpg" className={styles.logo} width={70} height={70} alt="logo" />
        </Link>
        <ul className={
          nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>

          <li>
            <Link href="/projects" onClick={() => setNav(!nav)}>Projects</Link>
          </li>
          <li>
            <Link href="/aboutme" onClick={() => setNav(!nav)}>About me</Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setNav(!nav)}>Services</Link>
          </li>
          <li>
            <Link href="/contacts" onClick={() => setNav(!nav)}>Contacts</Link>
          </li>
          <li><a href="https://wa.me/971555545167" target="_blank" rel="noopener noreferrer">
            <button className={styles.learnMoreBtn} onClick={() => setNav(!nav)}>Contact me</button>
          </a>
          </li>
        </ul>
        <div onClick={() => setNav(!nav)} className={styles.hamburgerMenu}> {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={30} />}
        </div>
      </nav>

    </header>
  );
}

export default Header;
