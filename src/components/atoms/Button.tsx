import {Pressable, StyleSheet, Text} from 'react-native';
import {ButtonProps} from '../../types';
import {useThemeStyles} from '../../hooks';

export const Button = ({text, onPress}: ButtonProps) => {
  const {colors, globalStyles} = useThemeStyles();

  const localStyles = StyleSheet.create({
    button: {
      padding: 10,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.primary,
      backgroundColor: colors.primary,
    },
  });

  return (
    <Pressable onPress={onPress} style={localStyles.button}>
      <Text style={globalStyles.textBody}>{text}</Text>
    </Pressable>
  );
};
