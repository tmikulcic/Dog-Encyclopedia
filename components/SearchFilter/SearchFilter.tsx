import { ChangeEvent } from 'react';
import styles from './SearchFilter.module.css';

type SearchFilterProps = {
  searchTerm: string;
  setSearchTerm: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchFilter: React.FC<SearchFilterProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <input type='text' placeholder='Search for breeds...' value={searchTerm} onChange={setSearchTerm} />
    </div>
  );
};

export default SearchFilter;
