import React from 'react';
import {Dimensions, StyleSheet, View, Platform, StatusBar} from 'react-native';
import {ThemeToggle} from '../molecules/ThemeToggle';
import {useThemeStyles} from '../../hooks';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Logo} from '../atoms/Logo';

export const Header = () => {
  const {colors, spacing} = useThemeStyles();
  const insets = useSafeAreaInsets();

  const localStyles = StyleSheet.create({
    header: {
      width: Dimensions.get('screen').width,
      height: 120,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: Platform.select({
        ios: insets.top,
        android: StatusBar.currentHeight || 24,
      }),
      paddingHorizontal: spacing.large,
      paddingBottom: 0,
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
      backgroundColor: colors.background,
    },
  });

  return (
    <View style={localStyles.header}>
      <Logo />
      <ThemeToggle />
    </View>
  );
};
