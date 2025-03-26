import {useQuery} from '@tanstack/react-query';
import {fetchFilms} from '../api/swapi';
import {translateFilmsAttributes} from '../utils/translate';
import {FilmType} from '../types';

export const useFetchFilms = (limit: number = 5) => {
  return useQuery<FilmType[]>({
    queryKey: ['films', limit],
    queryFn: async (): Promise<FilmType[]> => {
      const data = await fetchFilms(limit);
      return data.map(film => translateFilmsAttributes(film));
    },
  });
};
