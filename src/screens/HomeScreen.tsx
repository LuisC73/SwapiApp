import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetPeople, useGetFilms, useGetPlanets} from '../hooks';
import {Card, TouchableCard} from '../components';
import {FilmsData, PeopleData, PlanetsData} from '../types';

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

  if (isLoadingPeople || isLoadingFilms || isLoadingPlanets) {
    return <ActivityIndicator size="large" />;
  }

  if (isErrorPeople || isErrorFilms || isErrorPlanets) {
    return <Text>Error al cargar los datos</Text>;
  }

  return (
    <View>
      <Text style={styles.title}>Home Screen</Text>
      <ScrollView>
        {people.map((person: PeopleData, index: number) => (
          <TouchableCard
            key={index}
            title={person?.nombre}
            onPress={() => navigation.navigate('Detail', {item: person})}>
            <>
              <Text>Altura: {person?.altura}</Text>
              <Text>Masa: {person?.masa}</Text>
              <Text>Año de nacimiento: {person?.año_de_nacimiento}</Text>
              <Text>Género: {person?.genero}</Text>
              <Text>Color de cabello: {person?.color_de_cabello}</Text>
              <Text>Color de piel: {person?.color_de_piel}</Text>
              <Text>Color de ojos: {person?.color_de_ojos}</Text>
            </>
          </TouchableCard>
        ))}
        {films.map((film: FilmsData, index: number) => (
          <Card key={index} title={'Film'}>
            <>
              <Text>Titulo: {film?.titulo}</Text>
              <Text>Creado: {film?.creado}</Text>
              <Text>Director: {film?.director}</Text>
              <Text>Productor: {film?.productor}</Text>
            </>
          </Card>
        ))}
        {planets.map((planet: PlanetsData, index: number) => (
          <Card key={index} title={'Planet'}>
            <>
              <Text>Nombre: {planet?.nombre}</Text>
              <Text>Clima: {planet?.clima}</Text>
              <Text>Diametro: {planet?.diametro}</Text>
              <Text>Gravedad: {planet?.gravedad}</Text>
              <Text>Periodo orbital: {planet?.periodo_orbital}</Text>
              <Text>Población: {planet?.poblacion}</Text>
              <Text>Terreno: {planet?.terreno}</Text>
            </>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {},
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
