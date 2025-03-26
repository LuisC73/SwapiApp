import {useQuery} from '@tanstack/react-query';
import {fetchPlanetById} from '../api/swapi';
import {translatePlanetAttributes} from '../utils/translate';
import {PlanetType} from '../types';

export const useFetchPlanetById = (id: string) => {
  return useQuery<PlanetType>({
    queryKey: ['planet', id],
    queryFn: async (): Promise<PlanetType> => {
      const data = await fetchPlanetById(id);
      return translatePlanetAttributes(data);
    },
    enabled: !!id,
  });
};
