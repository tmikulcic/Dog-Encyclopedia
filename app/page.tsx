import DogCard from '@/components/UI/DogCard';
import DogCardContainer from '@/components/UI/DogCardContainer';
import MainContainer from '@/components/UI/MainContainer';
import { type Dogs, dogsData } from '@/data/dogs';

const Home: React.FC = () => {
  const dogs: Dogs[] = dogsData;

  return (
    <MainContainer>
      <DogCardContainer>
        {dogs.map((dog, index) => (
          <DogCard key={index} dog={dog} />
        ))}
      </DogCardContainer>
    </MainContainer>
  );
};

export default Home;
