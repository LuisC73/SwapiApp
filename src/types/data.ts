export interface SWAPIResponse<T> {
  results: T[];
}

export interface SWAPIPerson {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  [key: string]: any;
}

export interface SWAPIPlanet {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  population: string;
  terrain: string;
}

export interface SWAPIFilm {
  title: string;
  episode_id: number;
  director: string;
  producer: string;
  release_date: string;
}

export interface PersonType {
  nombre: string;
  altura: string;
  masa: string;
  color_de_cabello: string;
  color_de_piel: string;
  color_de_ojos: string;
  año_de_nacimiento: string;
  genero: string;
  planeta_natal?: string;
}

export interface FilmType {
  id_episodio: number;
  titulo: string;
  creado: string;
  director: string;
  productor: string;
}

export interface PlanetType {
  nombre: string;
  clima: string;
  diametro: string;
  gravedad: string;
  periodo_orbital: string;
  poblacion: string;
  terreno: string;
}
