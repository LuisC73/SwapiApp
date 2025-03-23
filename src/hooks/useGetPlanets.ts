import {useQuery} from '@tanstack/react-query';
import {getPlanets} from '../api/swapi';
import {translatePlanetAttributes} from '../utils/translate';

export const useGetPlanets = () => {
  return useQuery({
    queryKey: ['planets'],
    queryFn: async () => {
      const data = await getPlanets();
      return data.results.map(translatePlanetAttributes);
    },
  });
};
