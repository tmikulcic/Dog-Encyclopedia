import { type DogData } from '@/types/types';

const API_KEY = process.env.API_KEY as string | undefined;
const BASE_URL = 'https://api.api-ninjas.com/v1';

export const fetchDog = async (name: string): Promise<DogData[]> => {
  if (!API_KEY) {
    throw new Error('API key is missing');
  }

  const encodedName = encodeURIComponent(name);
  const res = await fetch(`${BASE_URL}/dogs?name=${encodedName}`, {
    method: 'GET',
    headers: {
      'X-Api-Key': API_KEY,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  const data: DogData[] = await res.json();
  return data;
};
