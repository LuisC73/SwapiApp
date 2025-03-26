import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useFetchPeople, useSearchPeople, useThemeStyles} from '../hooks';
import {SearchInput, TouchableCard} from '../components';
import {useState} from 'react';

export const SearchScreen = ({navigation}: {navigation: any}) => {
  const {data: initialData, isLoading: isLoadingInitial} = useFetchPeople(10);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    searchResults,
    isLoading: isSearchLoading,
    isError,
    search,
    clearSearch,
  } = useSearchPeople();

  const {spacing, globalStyles} = useThemeStyles();

  const handleSearch = () => {
    if (searchQuery.trim().length > 0) {
      search(searchQuery);
    }
  };

  const handleInputChange = (text: string) => {
    setSearchQuery(text);
    if (text.trim().length === 0) {
      clearSearch();
    }
  };

  const displayedData =
    searchQuery.trim() && searchResults.length > 0
      ? searchResults
      : initialData || [];

  if (isLoadingInitial || isSearchLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (isError) {
    return <Text>Error al cargar los datos</Text>;
  }

  const localStyles = StyleSheet.create({
    searchContainer: {
      paddingTop: spacing.medium,
      paddingHorizontal: spacing.large,
    },
    scrollView: {
      flexDirection: 'column',
      gap: spacing.medium,
      padding: spacing.large,
      paddingTop: 0,
    },
  });

  return (
    <View style={globalStyles.screenContainer}>
      <View style={localStyles.searchContainer}>
        <SearchInput
          input={{
            value: searchQuery,
            placeholder: 'Buscar Personaje',
            onChangeText: handleInputChange,
          }}
          button={{
            text: 'Buscar',
            onPress: handleSearch,
          }}
        />
      </View>
      <Text style={globalStyles.text}>{JSON.stringify(searchResults)}</Text>
      <FlatList
        contentContainerStyle={localStyles.scrollView}
        data={displayedData}
        renderItem={({item}) => (
          <TouchableCard
            title={item?.nombre}
            onPress={() => navigation.navigate('Detalles', {item})}>
            <>
              <Text style={globalStyles.text}>Tipo: Personaje</Text>
              <Text style={globalStyles.text}>Altura: {item?.altura} cm</Text>
              <Text style={globalStyles.text}>Masa: {item?.masa}</Text>
              <Text style={globalStyles.text}>
                Año de nacimiento: {item?.año_de_nacimiento}
              </Text>
              <Text style={globalStyles.text}>Género: {item?.genero}</Text>
              <Text style={globalStyles.text}>
                Color de cabello: {item?.color_de_cabello}
              </Text>
              <Text style={globalStyles.text}>
                Color de piel: {item?.color_de_piel}
              </Text>
              <Text style={globalStyles.text}>
                Color de ojos: {item?.color_de_ojos}
              </Text>
            </>
          </TouchableCard>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={globalStyles.text}>No se encontraron resultados</Text>
        }
      />
    </View>
  );
};
