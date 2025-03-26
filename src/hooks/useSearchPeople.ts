import {useQuery, useQueryClient} from '@tanstack/react-query';
import {searchPeople} from '../api/swapi';
import {translatePeopleAttributes} from '../utils/translate';
import {PersonType} from '../types';
import {useState} from 'react';

export const useSearchPeople = () => {
  const queryClient = useQueryClient();
  const [activeQuery, setActiveQuery] = useState<string | null>(null);

  const {data, isLoading, isError} = useQuery<PersonType[]>({
    queryKey: ['person', activeQuery],
    queryFn: async (): Promise<PersonType[]> => {
      if (!activeQuery) {
        return [];
      }
      const fetchedData = await searchPeople(activeQuery);
      return fetchedData.map(person => translatePeopleAttributes(person));
    },
    enabled: !!activeQuery,
  });

  const search = (searchQuery: string) => {
    queryClient.removeQueries({queryKey: ['person', activeQuery]});
    setActiveQuery(searchQuery.trim() || null);
  };

  const clearSearch = () => {
    setActiveQuery(null);
    queryClient.removeQueries({queryKey: ['person']});
  };

  return {
    searchResults: data || [],
    isLoading,
    isError,
    search,
    clearSearch,
  };
};
