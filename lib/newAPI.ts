import { type DogData } from '@/types/types';

const API_KEY = process.env.API_KEY as string | undefined;
const BASE_URL = 'https://api.api-ninjas.com/v1';
const LIMIT = 20; // Number of items per page

export const fetchAllDogs = async (): Promise<DogData[]> => {
  if (!API_KEY) {
    throw new Error('API key is missing');
  }

  let allDogs: DogData[] = [];
  let offset = 0;
  let hasMoreData = true;

  while (hasMoreData) {
    try {
      const res = await fetch(`${BASE_URL}/dogs`, {
        method: 'GET',
        headers: {
          'X-Api-Key': API_KEY,
          'Content-Type': 'application/json',
        },
        cache: 'no-store', // Important for server-side rendering
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch: ${res.status} ${res.statusText} - ${errorText}`);
      }

      const data: DogData[] = await res.json();

      if (data.length < LIMIT) {
        hasMoreData = false; // No more data to fetch
      }

      allDogs = allDogs.concat(data);
      offset += LIMIT; // Move to the next page
    } catch (error: any) {
      console.error('Error fetching dogs:', error);
      throw error; // Re-throw the error for higher-level handling
    }
  }

  return allDogs;
};
