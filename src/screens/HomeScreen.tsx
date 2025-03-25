import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  useGetPeople,
  useGetFilms,
  useGetPlanets,
  useThemeStyles,
} from '../hooks';
import {Card, TouchableCard} from '../components';
import {FilmsData, PeopleData, PlanetsData} from '../types';
import {spacing} from '../styles/theme';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const {
    data: people,
    isLoading: isLoadingPeople,
    isError: isErrorPeople,
  } = useGetPeople();
  const {
    data: films,
    isLoading: isLoadingFilms,
    isError: isErrorFilms,
  } = useGetFilms();
  const {
    data: planets,
    isLoading: isLoadingPlanets,
    isError: isErrorPlanets,
  } = useGetPlanets();

  const {globalStyles} = useThemeStyles();

  if (isLoadingPeople || isLoadingFilms || isLoadingPlanets) {
    return <ActivityIndicator size="large" />;
  }

  if (isErrorPeople || isErrorFilms || isErrorPlanets) {
    return <Text>Error al cargar los datos</Text>;
  }

  const localStyles = StyleSheet.create({
    scrollView: {
      flexDirection: 'column',
      gap: 40,
      padding: spacing.medium,
    },
  });

  return (
    <View style={globalStyles.screenContainer}>
      <ScrollView style={localStyles.scrollView}>
        {people.map((person: PeopleData, index: number) => (
          <TouchableCard
            key={index}
            title={person?.nombre}
            onPress={() => navigation.navigate('Detalles', {item: person})}>
            <>
              <Text style={globalStyles.textBody}>
                Altura: {person?.altura} cm
              </Text>
              <Text style={globalStyles.textBody}>Masa: {person?.masa}</Text>
              <Text style={globalStyles.textBody}>
                Año de nacimiento: {person?.año_de_nacimiento}
              </Text>
              <Text style={globalStyles.textBody}>
                Género: {person?.genero}
              </Text>
              <Text style={globalStyles.textBody}>
                Color de cabello: {person?.color_de_cabello}
              </Text>
              <Text style={globalStyles.textBody}>
                Color de piel: {person?.color_de_piel}
              </Text>
              <Text style={globalStyles.textBody}>
                Color de ojos: {person?.color_de_ojos}
              </Text>
            </>
          </TouchableCard>
        ))}
        {films.map((film: FilmsData, index: number) => (
          <Card key={index} title={'Film'}>
            <>
              <Text style={globalStyles.textBody}>Titulo: {film?.titulo}</Text>
              <Text style={globalStyles.textBody}>Creado: {film?.creado}</Text>
              <Text style={globalStyles.textBody}>
                Director: {film?.director}
              </Text>
              <Text style={globalStyles.textBody}>
                Productor: {film?.productor}
              </Text>
            </>
          </Card>
        ))}
        {planets.map((planet: PlanetsData, index: number) => (
          <Card key={index} title={'Planet'}>
            <>
              <Text style={globalStyles.textBody}>
                Nombre: {planet?.nombre}
              </Text>
              <Text style={globalStyles.textBody}>Clima: {planet?.clima}</Text>
              <Text style={globalStyles.textBody}>
                Diametro: {planet?.diametro}
              </Text>
              <Text style={globalStyles.textBody}>
                Gravedad: {planet?.gravedad}
              </Text>
              <Text style={globalStyles.textBody}>
                Periodo orbital: {planet?.periodo_orbital}
              </Text>
              <Text style={globalStyles.textBody}>
                Población: {planet?.poblacion}
              </Text>
              <Text style={globalStyles.textBody}>
                Terreno: {planet?.terreno}
              </Text>
            </>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};
