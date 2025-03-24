import {useQuery} from '@tanstack/react-query';
import {getPlanets} from '../api/swapi';
import {translatePlanetAttributes} from '../utils/translate';

export const useGetPlanets = (limit: number = 5) => {
  return useQuery({
    queryKey: ['planets'],
    queryFn: async () => {
      const data = await getPlanets(limit);
      return data.map(translatePlanetAttributes);
    },
  });
};
