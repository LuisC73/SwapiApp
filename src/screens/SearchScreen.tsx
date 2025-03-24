import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useSearchPerson} from '../hooks';
import {SearchInput, TouchableCard} from '../components';
import {useState} from 'react';

export const SearchScreen = ({navigation}: {navigation: any}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data, isLoading, isError, refetch} = useSearchPerson(searchQuery);

  const handleSearch = () => {
    if (searchQuery.trim().length > 0) {
      refetch();
    }
  };

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>Error al cargar los datos</Text>;
  }

  return (
    <View>
      <Text style={styles.title}>Search Screen</Text>
      <SearchInput
        input={{
          value: searchQuery,
          placeholder: 'Buscar Personaje',
          onChangeText: (text: string) => setSearchQuery(text),
        }}
        button={{
          text: 'Buscar',
          onPress: handleSearch,
        }}
      />
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableCard
            title={item?.nombre}
            onPress={() => navigation.navigate('Detail', {item})}>
            <>
              <Text>Altura: {item?.altura}</Text>
              <Text>Masa: {item?.masa}</Text>
              <Text>Año de nacimiento: {item?.año_de_nacimiento}</Text>
              <Text>Género: {item?.genero}</Text>
              <Text>Color de cabello: {item?.color_de_cabello}</Text>
              <Text>Color de piel: {item?.color_de_piel}</Text>
              <Text>Color de ojos: {item?.color_de_ojos}</Text>
            </>
          </TouchableCard>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
