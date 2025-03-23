const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';

export const getPeople = async () => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}/people`);
    if (!response.ok) {
      throw new Error('Error fetching people');
    }
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const searchPeople = async (query: string) => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}/people/?search=${query}`);
    if (!response.ok) {
      throw new Error('Error searching people');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {}
};

export const getFilms = async () => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}/films`);
    if (!response.ok) {
      throw new Error('Error fetching films');
    }
    const data = await response.json();
    return data;
  } catch (error) {}
};

export const getPlanets = async () => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}/planets`);
    if (!response.ok) {
      throw new Error('Error fetching planets');
    }
    const data = await response.json();
    return data;
  } catch (error) {}
};
