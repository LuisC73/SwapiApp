import {
  FilmType,
  PersonType,
  PlanetType,
  SWAPIResponse,
} from '../../../src/types';
import {
  fetchPeople,
  searchPeople,
  fetchFilms,
  fetchFilmById,
  fetchPlanets,
  fetchPlanetById,
} from '../../../src/api/swapi';

global.fetch = jest.fn() as jest.Mock;

const mockPerson: PersonType = {
  nombre: 'Luke Skywalker',
  altura: '172',
  masa: '77',
  color_de_cabello: 'blond',
  color_de_piel: 'fair',
  color_de_ojos: 'blue',
  año_de_nacimiento: '19BBY',
  genero: 'male',
  planeta_natal: 'https://swapi.py4e.com/api/planets/1/',
};

const mockFilm: FilmType = {
  titulo: 'A New Hope',
  id_episodio: 4,
  creado: '2014-12-10T14:23:31.880000Z',
  director: 'George Lucas',
  productor: 'Gary Kurtz, Rick McCallum',
};

const mockPlanet: PlanetType = {
  nombre: 'Tatooine',
  clima: 'arid',
  diametro: '10465',
  gravedad: '1 standard',
  periodo_orbital: '304',
  poblacion: '200000',
  terreno: 'desert',
};

beforeEach(() => {
  (fetch as jest.Mock).mockClear();
});

describe('fetchSwapiResource', () => {
  test('debe hacer una llamada GET a la URL correcta', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({results: [mockPerson]}),
    });

    await fetchPeople();

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('https://swapi.py4e.com/api/people'),
    );
  });

  test('debe agregar parámetros de búsqueda cuando se proporcionan', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({results: [mockPerson]}),
    });

    await searchPeople('skywalker');

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('search=skywalker'),
    );
  });

  test('debe lanzar un error cuando la respuesta no es ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      statusText: 'Not Found',
    });

    await expect(fetchPeople()).rejects.toThrow(
      'Error al consultar people: Not Found',
    );
  });
});

describe('fetchPeople', () => {
  test('debe retornar un arreglo de personajes', async () => {
    const mockResponse: SWAPIResponse<PersonType> = {
      results: [mockPerson],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchPeople();
    expect(result).toEqual([mockPerson]);
  });

  test('debe limitar los resultados cuando se especifica un límite', async () => {
    const mockResponse: SWAPIResponse<PersonType> = {
      results: [mockPerson, {...mockPerson, nombre: 'Leia Organa'}],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchPeople(1);
    expect(result).toHaveLength(1);
    expect(result[0].nombre).toBe('Luke Skywalker');
  });
});

describe('fetchFilms', () => {
  test('debe retornar un arreglo de películas', async () => {
    const mockResponse: SWAPIResponse<FilmType> = {
      results: [mockFilm],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchFilms();
    expect(result).toEqual([mockFilm]);
  });

  test('debe limitar los resultados cuando se especifica un límite', async () => {
    const mockResponse: SWAPIResponse<FilmType> = {
      results: [mockFilm, {...mockFilm, titulo: 'The Empire Strikes Back'}],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchFilms(1);
    expect(result).toHaveLength(1);
    expect(result[0].titulo).toBe('A New Hope');
  });
});

describe('fetchFilmById', () => {
  test('debe retornar una película por ID', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockFilm),
    });

    const result = await fetchFilmById('1');
    expect(result).toEqual(mockFilm);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('films/1'));
  });
});

describe('fetchPlanets', () => {
  test('debe retornar un arreglo de planetas', async () => {
    const mockResponse: SWAPIResponse<PlanetType> = {
      results: [mockPlanet],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await fetchPlanets();
    expect(result).toEqual([mockPlanet]);
  });
});

describe('fetchPlanetById', () => {
  test('debe retornar un planeta por ID', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockPlanet),
    });

    const result = await fetchPlanetById('1');
    expect(result).toEqual(mockPlanet);
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining('planets/1'));
  });
});
