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
      text: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        color: colors.text,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'Nunito-Bold',
        color: colors.primary,
      },
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Nunito-Bold',
        color: colors.primary,
      },
      buttonText: {
        fontSize: 14,
        fontFamily: 'Nunito-Regular',
        textAlign: 'center',
        color: colors.background,
      },
    }),
  };
};
