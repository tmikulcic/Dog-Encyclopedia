import { type Dogs } from '@/data/dogs';
import Link from 'next/link';
import Image from 'next/image';
import styles from './DogCard.module.css';
import imagePortrait from '@/public/images/dog-portrait.jpg';
import imageLandscape from '@/public/images/dog-landscape.jpg';

type DogCardProps = {
  dog: Dogs;
};

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  return (
    <li className={styles.card}>
      <Link href={`/${dog.breed}`}>
        <Image className={styles.cardImage} src={imageLandscape} alt='dog' />
        <p className={styles.dogBreed}>{dog.breed}</p>
        <p className={styles.dogBreedOverview}>{dog.overview}</p>
      </Link>
    </li>
  );
};

export default DogCard;
