import Image from 'next/image';
import MainContainer from '@/components/UI/MainContainer';
import { fetchDog } from '@/lib/api';
import styles from './page.module.css';

type BreedPageProps = {
  breed: string;
};

const BreedPage = async ({ params }: { params: BreedPageProps }) => {
  const breed = params.breed.replace(/%20/g, ' ').toLowerCase();
  const breedData = await fetchDog(breed);
  console.log(breedData);

  return (
    <MainContainer>
      <div className={styles.breedInfo}>
        <div className={styles.imageName}>
          <Image className={styles.breedImage} src={breedData[0].image_link} alt={breedData[0].name} width={200} height={200} priority />
          <h1>{breedData[0].name}</h1>
        </div>
        <div className={styles.categories}>
          <div className={styles.category}>
            <h2>Behavioral Traits</h2>
            <ul>
              <li>Good with Children: {breedData[0].good_with_children}</li>
              <li>Good with Other Dogs: {breedData[0].good_with_other_dogs}</li>
              <li>Good with Strangers: {breedData[0].good_with_strangers}</li>
              <li>Playfulness: {breedData[0].playfulness}</li>
              <li>Protectiveness: {breedData[0].protectiveness}</li>
              <li>Trainability: {breedData[0].trainability}</li>
            </ul>
          </div>

          <div className={styles.category}>
            <h2>Physical and Health Traits</h2>
            <ul>
              <li>Shedding: {breedData[0].shedding}</li>
              <li>Grooming: {breedData[0].grooming}</li>
              <li>Drooling: {breedData[0].drooling}</li>
              <li>Coat Length: {breedData[0].coat_length}</li>
              <li>Barking: {breedData[0].barking}</li>
              <li>Min Life Expectancy: {breedData[0].min_life_expectancy} years</li>
              <li>Max Life Expectancy: {breedData[0].max_life_expectancy} years</li>
            </ul>
          </div>

          <div className={styles.category}>
            <h2>Size</h2>
            <ul>
              <li>Max Height (Male): {breedData[0].max_height_male} inches</li>
              <li>Max Height (Female): {breedData[0].max_height_female} inches</li>
              <li>Max Weight (Male): {breedData[0].max_weight_male} lbs</li>
              <li>Max Weight (Female): {breedData[0].max_weight_female} lbs</li>
              <li>Min Height (Male): {breedData[0].min_height_male} inches</li>
              <li>Min Height (Female): {breedData[0].min_height_female} inches</li>
              <li>Min Weight (Male): {breedData[0].min_weight_male} lbs</li>
              <li>Min Weight (Female): {breedData[0].min_weight_female} lbs</li>
            </ul>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default BreedPage;
