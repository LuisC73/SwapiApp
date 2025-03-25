import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';
import {useTheme} from '../../context/ThemeContext';
import {useThemeStyles} from '../../hooks';

export const ThemeToggle = () => {
  const {resolvedTheme, toggleTheme} = useTheme();
  const {globalStyles} = useThemeStyles();

  const localStyles = StyleSheet.create({
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={localStyles.toggleContainer}>
      <Text style={globalStyles.textBody}>Modo Oscuro</Text>
      <Switch
        value={resolvedTheme === 'dark'}
        onValueChange={toggleTheme}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={resolvedTheme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
      />
    </View>
  );
};
