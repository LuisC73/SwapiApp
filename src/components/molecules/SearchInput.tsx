import {StyleSheet, View} from 'react-native';
import {Input} from '../atoms/Input';
import {Button} from '../atoms/Button';
import {SearchInputProps} from '../../types';

export const SearchInput = ({input, button}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <Input {...input} />
      <Button {...button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
