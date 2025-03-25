import {useTheme} from '../context/ThemeContext';
import {StyleSheet} from 'react-native';
import {darkColors, lightColors, spacing} from '../styles/theme';

export const useThemeStyles = () => {
  const {resolvedTheme} = useTheme();

  const colors = resolvedTheme === 'dark' ? darkColors : lightColors;

  return {
    colors: colors,
    spacing: spacing,
    globalStyles: StyleSheet.create({
      screenContainer: {
        flex: 1,
        backgroundColor: colors.background,
      },
      textBody: {
        fontSize: 16,
        color: colors.text,
      },
    }),
  };
};
