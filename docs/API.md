# Documentación API

El proyecto consume datos de la API pública SWAPI (Star Wars API) a través de un servicio centralizado ubicado en `src/api/swapi.ts`.

```typescript
const SWAPI_BASE_URL = 'https://swapi.py4e.com/api';
```

## Funciones Principales

```typescript
async function fetchSwapiResource<T>(
  endpoint: string,
  searchQuery?: string,
): Promise<T>;
```

| Parámetro     | Tipo    | Descripción                      |
| ------------- | ------- | -------------------------------- |
| `endpoint`    | string  | Endpoint de SWAPI a consultar    |
| `searchQuery` | string? | Término para búsqueda (opcional) |

## Endpoints implementados

- Personajes `(/people)`

```typescript
fetchPeople(limit?: number): Promise<PersonType[]>
searchPeople(query: string): Promise<PersonType[]>
```

- Películas `(/fimls)`

```typescript
fetchFilms(limit?: number): Promise<FilmType[]>
fetchFilmById(id: string): Promise<FilmType>
```

- Planetas `(/planets)`

```typescript
fetchPlanets(limit?: number): Promise<PlanetType[]>
fetchPlanetById(id: string): Promise<PlanetType>
```

## Tipos de datos `(src/types.ts)`

```typescript
interface SWAPIResponse<T> {
  results: T[];
}

interface PersonType {
  nombre: string;
  altura: string;
  masa: string;
  // ...otros campos
}

interface FilmType {
  id_episodio: string;
  titulo: string;
  creado: string;
  // ...otros campos
}

interface PlanetType {
  nombre: string;
  clima: string;
  diametro: string;
  // ...otros campos
}
```

## Integración con React Query

- Ejemplo de custom hook:

```typescript
export const useFetchPeople = (limit: number = 5) => {
  return useQuery<PersonType[]>({
    queryKey: ['people', limit],
    queryFn: async (): Promise<PersonType[]> => {
      const data = await fetchPeople(limit);
      return data.map(person => translatePeopleAttributes(person));
    },
  });
};
```

- Uso en componentes:

```typescript
const {data, isLoading, error} = useFetchPeople(10);
```

## Traducción de Atributos

El proyecto incluye un sistema de traducción de atributos de la API SWAPI (en inglés) a español.

### Configuración de Traducciones

```typescript
const translations = {
  people: {
    name: 'nombre',
    height: 'altura',
    mass: 'masa',
    hair_color: 'color_de_cabello',
    skin_color: 'color_de_piel',
    eye_color: 'color_de_ojos',
    birth_year: 'año_de_nacimiento',
    gender: 'genero',
    homeworld: 'planeta_natal',
  },
  films: {
    title: 'titulo',
    created: 'creado',
    director: 'director',
    producer: 'productor',
  },
  planets: {
    name: 'nombre',
    climate: 'clima',
    diameter: 'diametro',
    gravity: 'gravedad',
    orbital_period: 'periodo_orbital',
    population: 'poblacion',
    terrain: 'terreno',
  },
} as const;
```

### Funciones de Traducción

```typescript
function translateAttributes<T extends ResourceType>(
  data: any,
  type: T,
): TranslatedType<T>;
```

| Parámetro | Tipo         | Descripción                                    |
| --------- | ------------ | ---------------------------------------------- |
| `data`    | any          | Objeto con datos a traducir                    |
| `type`    | ResourceType | Tipo de recurso ('people', 'films', 'planets') |

### Funciones Específicas

```typescript
export const translatePeopleAttributes = (data: any) => PersonType;
export const translateFilmsAttributes = (data: any) => FilmType;
export const translatePlanetAttributes = (data: any) => PlanetType;
```

## Consideraciones

- Los atributos no definidos en el mapa de traducción se mantienen en inglés.

- El sistema preserva los valores originales, solo cambia los nombres de las propiedades.

## Próximos pasos

- [] Implementar paginación

- [] Añadir tests unitarios

- [] Mejorar manejo de errores
