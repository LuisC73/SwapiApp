import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useFetchFilmById, useFetchPlanetById, useThemeStyles} from '../hooks';

const extractIdFromUrl = (url: string) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

export const DetailScreen = ({route}: {route: any}) => {
  const {item} = route.params;
  const planetId: string = extractIdFromUrl(item?.planeta_natal);
  const filmIds: string[] = item?.films.map(extractIdFromUrl);

  const {data: planet, isLoading: isLoadingPlanet} =
    useFetchPlanetById(planetId);
  const {data: films, isLoading: isLoadingFilms} = useFetchFilmById(filmIds);
  const {spacing, globalStyles} = useThemeStyles();

  if (isLoadingPlanet || isLoadingFilms) {
    return <ActivityIndicator size="large" />;
  }

  const localStyles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      gap: spacing.medium,
      padding: spacing.large,
      paddingBottom: 120,
    },
    section: {
      flexDirection: 'column',
      gap: spacing.medium,
    },
    scrollView: {
      flexDirection: 'column',
      gap: spacing.medium,
    },
  });

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView contentContainerStyle={localStyles.container}>
        <Text style={globalStyles.title}>{item.nombre}</Text>
        <View>
          <Text style={globalStyles.text}>Altura: {item?.altura} cm</Text>
          <Text style={globalStyles.text}>Masa: {item?.masa}</Text>
          <Text style={globalStyles.text}>
            Año de nacimiento: {item?.año_de_nacimiento}
          </Text>
          <Text style={globalStyles.text}>Género: {item?.genero}</Text>
        </View>

        <View>
          <Text style={globalStyles.text}>
            Color de cabello: {item?.color_de_cabello}
          </Text>
          <Text style={globalStyles.text}>
            Color de piel: {item?.color_de_piel}
          </Text>
          <Text style={globalStyles.text}>
            Color de ojos: {item?.color_de_ojos}
          </Text>
        </View>

        <View style={localStyles.section}>
          <Text style={globalStyles.subtitle}>Planeta Natal</Text>
          {planet ? (
            <View>
              <Text style={globalStyles.text}>Nombre: {planet.nombre}</Text>
              <Text style={globalStyles.text}>Clima: {planet.clima}</Text>
              <Text style={globalStyles.text}>
                Población: {planet.poblacion}
              </Text>
              <Text style={globalStyles.text}>Terreno: {planet.terreno}</Text>
            </View>
          ) : (
            <Text style={globalStyles.text}>
              No se pudo cargar información del planeta
            </Text>
          )}
        </View>

        {films && films.length > 0 && (
          <View style={localStyles.section}>
            <Text style={globalStyles.subtitle}>Peliculas donde aparece</Text>
            <View style={localStyles.scrollView}>
              {films?.map((film, index) => (
                <View key={index}>
                  <Text style={globalStyles.text}>Titulo: {film.titulo}</Text>
                  <Text style={globalStyles.text}>
                    Creado: {new Date(film.creado).toLocaleDateString()}
                  </Text>
                  <Text style={globalStyles.text}>
                    Director: {film.director}
                  </Text>
                  <Text style={globalStyles.text}>
                    Productor: {film.productor}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};
