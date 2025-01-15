import { useState, useEffect } from 'react';
import alexTechLogoImg from '../imgs/AlexTech.png';
import styles from '../styles/header.module.css';

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowHeader(window.scrollY > 100);

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <header className={`${styles.headerContainer} ${showHeader ? styles.headerIsActive : ''}`}>
      <img 
        src={alexTechLogoImg}
        alt='Alex Tech Logo'
        height={16}
      />
    </header>
  );
}
