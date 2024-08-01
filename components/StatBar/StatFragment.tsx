import styles from './StatFragment.module.css';

type StatFragmentProps = {
  active: Boolean;
};

const StatFragment: React.FC<StatFragmentProps> = ({ active }) => {
  if (active) {
    return <li className={styles.activeBox}></li>;
  } else {
    return <li className={styles.inactiveBox}></li>;
  }
};

export default StatFragment;
