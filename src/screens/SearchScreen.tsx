import {Text, View} from 'react-native';
import {useGetPeople} from '../hooks';

export const SearchScreen = () => {
  const {data, isLoading, isError} = useGetPeople();

  return (
    <View>
      <Text>Search Screen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
