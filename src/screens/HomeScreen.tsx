import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetPeople, useGetFilms, useGetPlanets} from '../hooks';

export const HomeScreen = () => {
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
        <Text style={styles.text}>People: {JSON.stringify(people)}</Text>
        <Text style={styles.text}>Films: {JSON.stringify(films)}</Text>
        <Text style={styles.text}>Planets: {JSON.stringify(planets)}</Text>
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
