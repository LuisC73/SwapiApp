import {useQuery} from '@tanstack/react-query';
import {getFilms} from '../api/swapi';
import {translateFilmsAttributes} from '../utils/translate';

export const useGetFilms = () => {
  return useQuery({
    queryKey: ['films'],
    queryFn: async () => {
      const data = await getFilms();
      return data.results.map(translateFilmsAttributes);
    },
  });
};
