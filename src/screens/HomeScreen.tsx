import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  useFetchPeople,
  useFetchFilms,
  useFetchPlanets,
  useThemeStyles,
} from '../hooks';
import {FilmType, PersonType, PlanetType} from '../types';
import {Card, TouchableCard} from '../components';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const {
    data: people,
    isLoading: isLoadingPeople,
    isError: isErrorPeople,
  } = useFetchPeople();
  const {
    data: films,
    isLoading: isLoadingFilms,
    isError: isErrorFilms,
  } = useFetchFilms();
  const {
    data: planets,
    isLoading: isLoadingPlanets,
    isError: isErrorPlanets,
  } = useFetchPlanets();

  const {spacing, globalStyles} = useThemeStyles();

  if (isLoadingPeople || isLoadingFilms || isLoadingPlanets) {
    return <ActivityIndicator size="large" />;
  }

  if (isErrorPeople || isErrorFilms || isErrorPlanets) {
    return <Text>Error al cargar los datos</Text>;
  }

  const localStyles = StyleSheet.create({
    scrollView: {
      flexDirection: 'column',
      gap: spacing.medium,
      padding: spacing.large,
      paddingTop: 0,
    },
  });

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView contentContainerStyle={localStyles.scrollView}>
        {people?.map((person: PersonType, index: number) => (
          <TouchableCard
            key={index}
            title={person?.nombre}
            onPress={() => navigation.navigate('Detalles', {item: person})}>
            <>
              <Text style={globalStyles.text}>Tipo: Personaje</Text>
              <Text style={globalStyles.text}>Altura: {person?.altura} cm</Text>
              <Text style={globalStyles.text}>Masa: {person?.masa}</Text>
              <Text style={globalStyles.text}>
                Año de nacimiento: {person?.año_de_nacimiento}
              </Text>
              <Text style={globalStyles.text}>Género: {person?.genero}</Text>
              <Text style={globalStyles.text}>
                Color de cabello: {person?.color_de_cabello}
              </Text>
              <Text style={globalStyles.text}>
                Color de piel: {person?.color_de_piel}
              </Text>
              <Text style={globalStyles.text}>
                Color de ojos: {person?.color_de_ojos}
              </Text>
            </>
          </TouchableCard>
        ))}
        {films?.map((film: FilmType, index: number) => (
          <Card key={index} title={film?.titulo}>
            <>
              <Text style={globalStyles.text}>Tipo: Pelicula</Text>
              <Text style={globalStyles.text}>
                Creado: {new Date(film?.creado).toLocaleDateString()}
              </Text>
              <Text style={globalStyles.text}>Director: {film?.director}</Text>
              <Text style={globalStyles.text}>
                Productor: {film?.productor}
              </Text>
            </>
          </Card>
        ))}
        {planets?.map((planet: PlanetType, index: number) => (
          <Card key={index} title={planet?.nombre}>
            <>
              <Text style={globalStyles.text}>Tipo: Planeta</Text>
              <Text style={globalStyles.text}>Clima: {planet?.clima}</Text>
              <Text style={globalStyles.text}>
                Diametro: {planet?.diametro}
              </Text>
              <Text style={globalStyles.text}>
                Gravedad: {planet?.gravedad}
              </Text>
              <Text style={globalStyles.text}>
                Periodo orbital: {planet?.periodo_orbital}
              </Text>
              <Text style={globalStyles.text}>
                Población: {planet?.poblacion}
              </Text>
              <Text style={globalStyles.text}>Terreno: {planet?.terreno}</Text>
            </>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};
