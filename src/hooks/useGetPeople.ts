import {useQuery} from '@tanstack/react-query';
import {getPeople} from '../api/swapi';
import {translatePeopleAttributes} from '../utils/translate';

export const useGetPeople = () => {
  return useQuery({
    queryKey: ['people'],
    queryFn: async () => {
      const data = await getPeople();
      return data.results.map(translatePeopleAttributes);
    },
  });
};
