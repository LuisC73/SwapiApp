import {StyleSheet} from 'react-native';
import {darkColors, lightColors, spacing} from '../styles/theme';
import {useTheme} from './useTheme';

export const useThemeStyles = () => {
  const {theme} = useTheme();

  const colors = theme === 'dark' ? darkColors : lightColors;

  return {
    colors: colors,
    spacing: spacing,
    globalStyles: StyleSheet.create({
      screenContainer: {
        flex: 1,
        backgroundColor: colors.background,
      },
      centerContent: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
      errorText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        color: colors.error,
      },
      infoText: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'Nunito-Bold',
        textAlign: 'center',
        color: colors.info,
      },
    }),
  };
};
