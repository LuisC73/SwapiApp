import {Pressable, StyleSheet, Text} from 'react-native';
import {ButtonProps} from '../../types';
import {useThemeStyles} from '../../hooks';

export const Button = ({width, text, onPress}: ButtonProps) => {
  const {colors, spacing, globalStyles} = useThemeStyles();

  const localStyles = StyleSheet.create({
    button: {
      width: width ?? 'auto',
      padding: spacing.small,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.primary,
      backgroundColor: colors.primary,
    },
  });

  return (
    <Pressable onPress={onPress} style={localStyles.button}>
      <Text style={globalStyles.buttonText}>{text}</Text>
    </Pressable>
  );
};
