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
};

const translateAttributes = <T extends Record<string, any>>(
  data: T,
  type: keyof typeof translations,
): Record<string, any> => {
  const translationMap = translations[type] as Record<string, string>;

  return Object.keys(data).reduce((acc, key) => {
    const translatedKey = translationMap[key] || key;
    acc[translatedKey] = data[key];
    return acc;
  }, {} as Record<string, any>);
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
