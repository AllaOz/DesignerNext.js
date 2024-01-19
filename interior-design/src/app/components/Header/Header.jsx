import React, { useState } from 'react';
import styles from './Header.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  const [nav, setNav] = useState(false);

  const handleToggleNav = () => {
    setNav(!nav);
  };

  return (
    <header className={styles.cardHeader}>
      <nav className={`${styles.nav} ${nav ? styles.active : ''}`}>
        <Link href='/'>
            <Image src="/logo.jpg" className={styles.logo} width={70} height={70} alt="logo" />
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href='/' onClick={handleToggleNav}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/notfound' onClick={handleToggleNav}>
              Projects
            </Link>
          </li>
          <li>
            <Link href='/services' onClick={handleToggleNav}>
              Services
            </Link>
          </li>
          <li>
            <Link href='/aboutme' onClick={handleToggleNav}>
              About me
            </Link>
          </li>
          <li>
            <Link href='/notfound' onClick={handleToggleNav}>
              Contacts
            </Link>
          </li>
          <select className={styles.languagesSelect}>
            <option value="English">EN</option>
            <option value="Russian">RU</option>
          </select>
        </ul>
        <div onClick={handleToggleNav} className={styles.hamburgerMenu}>
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={30} />}
        </div>
      </nav>
    </header>
  );
}

export default Header;
