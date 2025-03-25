import {Dimensions, StyleSheet, View} from 'react-native';
import {Input} from '../atoms/Input';
import {Button} from '../atoms/Button';
import {SearchInputProps} from '../../types';
import {useThemeStyles} from '../../hooks';

export const SearchInput = ({input, button}: SearchInputProps) => {
  const {spacing} = useThemeStyles();

  const localStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: spacing.small,
    },
  });

  return (
    <View style={localStyles.container}>
      <Input width={Dimensions.get('screen').width * 0.6} {...input} />
      <Button width={Dimensions.get('screen').width * 0.2} {...button} />
    </View>
  );
};
