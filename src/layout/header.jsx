import alexTechLogoImg from '../imgs/AlexTech.png';
import styles from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img 
        src={alexTechLogoImg}
        alt="Alex Tech Logo"
        height={16}
      />
    </header>
  );
}
