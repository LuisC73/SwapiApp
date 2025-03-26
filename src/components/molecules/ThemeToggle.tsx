import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme, useThemeStyles} from '../../hooks';
import {ButtonIcon} from './ButtonIcon';

export const ThemeToggle = () => {
  const {theme, toggleTheme} = useTheme();
  const {colors, spacing} = useThemeStyles();
  const isDarkMode = theme === 'dark';

  const localStyles = StyleSheet.create({
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.small,
    },
  });

  return (
    <View style={localStyles.toggleContainer}>
      <ButtonIcon
        icon={{
          name: isDarkMode ? 'sun' : 'moon',
          color: colors.background,
          size: 20,
        }}
        onPress={toggleTheme}
      />
    </View>
  );
};
