import {FilmType, PersonType, PlanetType, SWAPIResponse} from '../types';

const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';

const fetchSwapiResource = async <T>(
  endpoint: string,
  searchQuery?: string,
): Promise<T> => {
  const url = new URL(`${SWAPI_BASE_URL}/${endpoint}`);

  if (searchQuery) {
    url.searchParams.append('search', searchQuery);
  }

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Error al consultar ${endpoint}: ${response.statusText}`);
  }

  return response.json();
};

export const fetchPeople = async (limit?: number): Promise<PersonType[]> => {
  const data = await fetchSwapiResource<SWAPIResponse<PersonType>>('people');
  return limit ? data.results.slice(0, limit) : data.results;
};

export const searchPeople = async (query: string): Promise<PersonType[]> => {
  const data = await fetchSwapiResource<SWAPIResponse<PersonType>>(
    'people',
    query,
  );
  return data.results;
};

export const fetchFilms = async (limit?: number): Promise<FilmType[]> => {
  const data = await fetchSwapiResource<SWAPIResponse<FilmType>>('films');
  return limit ? data.results.slice(0, limit) : data.results;
};

export const fetchFilmById = async (id: string): Promise<FilmType> => {
  const data = await fetchSwapiResource<FilmType>(`films/${id}`);
  return data;
};

export const fetchPlanets = async (limit?: number): Promise<PlanetType[]> => {
  const data = await fetchSwapiResource<SWAPIResponse<PlanetType>>('planets');
  return limit ? data.results.slice(0, limit) : data.results;
};

export const fetchPlanetById = async (id: string): Promise<PlanetType> => {
  const data = await fetchSwapiResource<PlanetType>(`planets/${id}`);
  return data;
};
