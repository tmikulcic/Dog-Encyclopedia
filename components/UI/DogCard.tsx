import { type Dogs } from '@/data/dogs';
import Link from 'next/link';
import styles from './DogCard.module.css';

type DogCardProps = {
  dog: Dogs;
};

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  let badgeComponent;

  if (dog.size === 'Small') {
    badgeComponent = (
      <div className={styles.breedSizeBadge} style={{ backgroundColor: 'green' }}>
        S
      </div>
    );
  } else if (dog.size === 'Medium') {
    badgeComponent = (
      <div className={styles.breedSizeBadge} style={{ backgroundColor: 'gold' }}>
        M
      </div>
    );
  } else if (dog.size === 'Large') {
    badgeComponent = (
      <div className={styles.breedSizeBadge} style={{ backgroundColor: 'purple' }}>
        L
      </div>
    );
  } else {
    badgeComponent = (
      <div className={styles.breedSizeBadge} style={{ backgroundColor: 'red' }}>
        XL
      </div>
    );
  }

  return (
    <li className={styles.card}>
      <Link href={`/${dog.breed}`}>
        <div className={styles.titleBadge}>
          <p>{dog.breed}</p>
          {badgeComponent}
        </div>
        <p className={styles.dogBreedOverview}>{dog.overview}</p>
      </Link>
    </li>
  );
};

export default DogCard;
