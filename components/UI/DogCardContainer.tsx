import { type ReactNode } from 'react';
import styles from './DogCardContainer.module.css';

type DogCardContainerProps = {
  children: ReactNode;
};

const DogCardContainer: React.FC<DogCardContainerProps> = ({ children }) => {
  return <ul className={styles.container}>{children}</ul>;
};

export default DogCardContainer;
