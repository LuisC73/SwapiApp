import {useQuery} from '@tanstack/react-query';
import {getPeople} from '../api/swapi';
import {translatePeopleAttributes} from '../utils/translate';

export const useGetPeople = (limit: number = 5) => {
  return useQuery({
    queryKey: ['people'],
    queryFn: async () => {
      const data = await getPeople(limit);
      return data.map(translatePeopleAttributes);
    },
  });
};
