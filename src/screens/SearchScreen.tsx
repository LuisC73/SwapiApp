import {Text, View} from 'react-native';
import {usePeople} from '../hooks';

export const SearchScreen = () => {
  const {data, isLoading, isError} = usePeople();

  return (
    <View>
      <Text>Search Screen</Text>
      <Text>{JSON.stringify(data)}</Text>
    </View>
  );
};
