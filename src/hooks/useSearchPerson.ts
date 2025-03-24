import {useQuery} from '@tanstack/react-query';
import {searchPeople} from '../api/swapi';
import {translatePeopleAttributes} from '../utils/translate';

export const useSearchPerson = (query: string) => {
  return useQuery({
    queryKey: ['person'],
    queryFn: async () => {
      const data = await searchPeople(query);
      return data.map(translatePeopleAttributes);
    },
  });
};
