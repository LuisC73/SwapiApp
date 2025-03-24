import {useQuery} from '@tanstack/react-query';
import {getFilms} from '../api/swapi';
import {translateFilmsAttributes} from '../utils/translate';

export const useGetFilms = (limit: number = 5) => {
  return useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      const data = await getFilms(limit);
      return data.map(translateFilmsAttributes);
    },
  });
};
