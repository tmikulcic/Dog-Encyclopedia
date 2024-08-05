'use client';

import { ChangeEvent, useState } from 'react';
import SearchFilter from '@/components/SearchFilter/SearchFilter';
import DogCard from '@/components/UI/DogCard';
import DogCardContainer from '@/components/UI/DogCardContainer';
import MainContainer from '@/components/UI/MainContainer';
import { type Dogs, dogsData } from '@/data/dogs';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const dogs: Dogs[] = dogsData;

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSizeChange = (value: string) => {
    setSizeFilter(value);
  };

  const filteredDogs = dogs.filter((dog) => dog.breed.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <MainContainer>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
      <DogCardContainer>
        {filteredDogs.map((dog, index) => (
          <DogCard key={index} dog={dog} />
        ))}
      </DogCardContainer>
    </MainContainer>
  );
};

export default Home;
