import MainContainer from '@/components/UI/MainContainer';
import { fetchDog } from '@/lib/api';

type BreedPageProps = {
  breed: string;
};

const BreedPage = async ({ params }: { params: BreedPageProps }) => {
  const breed = params.breed.replace(/%20/g, ' ').toLowerCase();
  const breedData = await fetchDog(breed);
  console.log(breedData);

  return (
    <MainContainer>
      <h1>{breedData[0].name}</h1>
    </MainContainer>
  );
};

export default BreedPage;
