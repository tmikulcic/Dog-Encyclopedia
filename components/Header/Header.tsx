import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>Dog Encyclopedia</Link>
    </header>
  );
};

export default Header;
