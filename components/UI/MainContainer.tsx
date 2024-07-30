import { type ReactNode } from 'react';
import styles from './MainContainer.module.css';

type MainContainerProps = {
  children: ReactNode;
};

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default MainContainer;
