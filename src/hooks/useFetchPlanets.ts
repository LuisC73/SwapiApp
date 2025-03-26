import {useQuery} from '@tanstack/react-query';
import {fetchPlanets} from '../api/swapi';
import {translatePlanetAttributes} from '../utils/translate';
import {PlanetType} from '../types';

export const useFetchPlanets = (limit: number = 5) => {
  return useQuery<PlanetType[]>({
    queryKey: ['planets', limit],
    queryFn: async (): Promise<PlanetType[]> => {
      const data = await fetchPlanets(limit);
      return data.map(planet => translatePlanetAttributes(planet));
    },
  });
};
