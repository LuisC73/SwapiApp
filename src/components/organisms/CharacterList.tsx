import {FlatList} from 'react-native';
import {CharacterListProps} from '../../types';
import {CharacterCard} from '../molecules/CharacterCard';

export const CharacterList = ({data, navigation}: CharacterListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.name}
      renderItem={({item}) => (
        <CharacterCard
          data={data}
          onPress={() => navigation.navigate('Detail', {item: item})}
        />
      )}
    />
  );
};
