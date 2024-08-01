import Image from 'next/image';
import MainContainer from '@/components/UI/MainContainer';
import { fetchDog } from '@/lib/api';
import styles from './page.module.css';
import StatBar from '@/components/StatBar/StatBar';

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
            <h3>Behavioral Traits</h3>
            <StatBar title='Good with Children' value={breedData[0].good_with_children} />
            <StatBar title='Good with Other Dogs' value={breedData[0].good_with_other_dogs} />
            <StatBar title='Good with Strangers' value={breedData[0].good_with_strangers} />
            <StatBar title='Playfulness' value={breedData[0].playfulness} />
            <StatBar title='Protectiveness' value={breedData[0].protectiveness} />
            <StatBar title='Trainability' value={breedData[0].trainability} />
          </div>

          <div className={styles.category}>
            <h3>Physical and Health Traits</h3>
            <StatBar title='Shedding' value={breedData[0].shedding} />
            <StatBar title='Grooming' value={breedData[0].grooming} />
            <StatBar title='Drooling' value={breedData[0].drooling} />
            <StatBar title='Coat Length' value={breedData[0].coat_length} />
            <StatBar title='Barking' value={breedData[0].barking} />
            <StatBar title='Min Life Expectancy' value={breedData[0].min_life_expectancy} />
            <StatBar title='Max Life Expectancy' value={breedData[0].max_life_expectancy} />
          </div>

          <div className={styles.category}>
            <h3>Size</h3>
            <StatBar title='Max Height (Male)' value={breedData[0].max_height_male} />
            <StatBar title='Max Height (Female)' value={breedData[0].max_height_female} />
            <StatBar title='Max Weight (Male)' value={breedData[0].max_weight_male} />
            <StatBar title='Max Weight (Female)' value={breedData[0].max_weight_female} />
            <StatBar title='Min Height (Male)' value={breedData[0].min_height_male} />
            <StatBar title='Min Height (Female)' value={breedData[0].min_height_female} />
            <StatBar title='Min Weight (Male)' value={breedData[0].min_weight_male} />
            <StatBar title='Min Weight (Female)' value={breedData[0].min_weight_female} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default BreedPage;
