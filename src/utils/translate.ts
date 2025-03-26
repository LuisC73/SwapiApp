import {FilmType, PersonType, PlanetType} from '../types';

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

type ResourceType = keyof typeof translations;

const translateAttributes = <T extends ResourceType>(
  data: any,
  type: T,
): T extends 'people'
  ? PersonType
  : T extends 'planets'
  ? PlanetType
  : T extends 'films'
  ? FilmType
  : never => {
  const translationMap = translations[type];

  const result = Object.entries(data).reduce((acc, [key, value]) => {
    const translatedKey =
      translationMap[key as keyof typeof translationMap] || key;
    acc[translatedKey] = value;
    return acc;
  }, {} as any);

  return result;
};

export const translatePeopleAttributes = (data: any) => {
  return translateAttributes(data, 'people');
};

export const translateFilmsAttributes = (data: any) => {
  return translateAttributes(data, 'films');
};

export const translatePlanetAttributes = (data: any) => {
  return translateAttributes(data, 'planets');
};
