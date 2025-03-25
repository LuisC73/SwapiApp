import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useSearchPerson, useThemeStyles} from '../hooks';
import {SearchInput, TouchableCard} from '../components';
import {useState} from 'react';

export const SearchScreen = ({navigation}: {navigation: any}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {data, isLoading, isError, refetch} = useSearchPerson(searchQuery);
  const {globalStyles} = useThemeStyles();

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
    <View style={globalStyles.screenContainer}>
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
            onPress={() => navigation.navigate('Detalles', {item})}>
            <>
              <Text style={globalStyles.textBody}>Altura: {item?.altura}</Text>
              <Text style={globalStyles.textBody}>Masa: {item?.masa}</Text>
              <Text style={globalStyles.textBody}>
                Año de nacimiento: {item?.año_de_nacimiento}
              </Text>
              <Text style={globalStyles.textBody}>Género: {item?.genero}</Text>
              <Text style={globalStyles.textBody}>
                Color de cabello: {item?.color_de_cabello}
              </Text>
              <Text style={globalStyles.textBody}>
                Color de piel: {item?.color_de_piel}
              </Text>
              <Text style={globalStyles.textBody}>
                Color de ojos: {item?.color_de_ojos}
              </Text>
            </>
          </TouchableCard>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
