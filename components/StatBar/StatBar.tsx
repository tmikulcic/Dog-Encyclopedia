import StatFragment from './StatFragment';
import styles from './StatBar.module.css';

type StatBarProps = {
  title: string;
  value: number;
};

const StatBar: React.FC<StatBarProps> = ({ title, value }) => {
  return (
    <div className={styles.statBarContainer}>
      <h3>{title}</h3>
      <ul>
        {[...Array(5)].map((_, index) => (
          <StatFragment key={index} active={index < value} />
        ))}
      </ul>
    </div>
  );
};

export default StatBar;
