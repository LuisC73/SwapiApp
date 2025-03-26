import {useQuery, useQueryClient} from '@tanstack/react-query';
import {searchPeople} from '../api/swapi';
import {translatePeopleAttributes} from '../utils/translate';
import {PersonType} from '../types';
import {useState} from 'react';

export const useSearchPeople = () => {
  const queryClient = useQueryClient();
  const [activeQuery, setActiveQuery] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const {data, isLoading, isError, isFetching} = useQuery<PersonType[]>({
    queryKey: ['person', activeQuery],
    queryFn: async (): Promise<PersonType[]> => {
      if (!activeQuery) {
        return [];
      }
      const fetchedData = await searchPeople(activeQuery);
      return fetchedData.map(person => translatePeopleAttributes(person));
    },
    enabled: !!activeQuery,
    meta: {
      onSuccess: () => {
        setHasSearched(true);
      },
      onError: () => {
        setHasSearched(true);
      },
    },
  });

  const search = (searchQuery: string) => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      setHasSearched(true);
      queryClient.removeQueries({queryKey: ['person', activeQuery]});
      setActiveQuery(trimmedQuery);
    }
  };

  const clearSearch = () => {
    setActiveQuery(null);
    setHasSearched(false);
    queryClient.removeQueries({queryKey: ['person']});
  };

  return {
    searchResults: data || [],
    isLoading: isLoading || isFetching,
    isError,
    hasSearched,
    isEmptyResults: hasSearched && !isLoading && !isError && data?.length === 0,
    search,
    clearSearch,
  };
};
