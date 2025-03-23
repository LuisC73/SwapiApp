import {View} from 'react-native';
import {Input} from '../atoms/Input';
import {Button} from '../atoms/Button';
import {SearchInputProps} from '../../types';

export const SearchInput = ({input, button, onSearch}: SearchInputProps) => {
  return (
    <View>
      <Input {...input} />
      <Button {...button} />
    </View>
  );
};
