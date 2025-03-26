import {useQuery} from '@tanstack/react-query';
import {fetchPeople} from '../api/swapi';
import {translatePeopleAttributes} from '../utils/translate';
import {PersonType} from '../types';

export const useFetchPeople = (limit: number = 5) => {
  return useQuery<PersonType[]>({
    queryKey: ['people', limit],
    queryFn: async (): Promise<PersonType[]> => {
      const data = await fetchPeople(limit);
      return data.map(person => translatePeopleAttributes(person));
    },
  });
};
