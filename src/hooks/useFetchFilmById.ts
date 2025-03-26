import {useQuery} from '@tanstack/react-query';
import {fetchFilmById} from '../api/swapi';
import {translateFilmsAttributes} from '../utils/translate';
import {FilmType} from '../types';

export const useFetchFilmById = (filmIds: string[]) => {
  return useQuery<FilmType[]>({
    queryKey: ['planet', filmIds.join(',')],
    queryFn: async (): Promise<FilmType[]> => {
      const data = await Promise.all(filmIds.map(id => fetchFilmById(id)));
      return data.map(film => translateFilmsAttributes(film));
    },
    enabled: filmIds.length > 0,
  });
};
