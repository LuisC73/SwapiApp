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
  const {
    data: initialData,
    isLoading: isLoadingInitial,
    isError: isErrorInitial,
  } = useFetchPeople(10);
  const [searchQuery, setSearchQuery] = useState('');

  const {
    searchResults,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
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

  if (isLoadingInitial || isLoadingSearch) {
    return (
      <View style={globalStyles.centerContent}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isErrorInitial) {
    return (
      <View style={globalStyles.centerContent}>
        <Text style={globalStyles.errorText}>Error al cargar los datos</Text>
      </View>
    );
  }

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
      <FlatList
        contentContainerStyle={localStyles.scrollView}
        data={displayedData}
        renderItem={({item}) => (
          <TouchableCard
            title={item?.nombre}
            onPress={() => navigation.navigate('Detalles', {item})}>
            <>
              <Text style={globalStyles.text}>Altura: {item?.altura} cm</Text>
              <Text style={globalStyles.text}>Masa: {item?.masa} kg</Text>
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
          <Text style={globalStyles.errorText}>
            No se encontraron resultados
          </Text>
        }
      />
      {isErrorSearch && (
        <Text style={globalStyles.errorText}>No se encontraron resultados</Text>
      )}
    </View>
  );
};
