import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {ThemeToggle} from '../molecules/ThemeToggle';
import {useThemeStyles} from '../../hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Header = () => {
  const {colors, globalStyles} = useThemeStyles();
  const insets = useSafeAreaInsets();

  const localStyles = StyleSheet.create({
    header: {
      width: Dimensions.get('screen').width,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: Platform.select({
        ios: insets.top,
        android: StatusBar.currentHeight || 24, // Fallback para Android
      }),
      paddingHorizontal: 16,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
      backgroundColor: colors.background,
    },
  });

  return (
    <View style={localStyles.header}>
      <Text style={globalStyles.textBody}>Header</Text>
      <ThemeToggle />
    </View>
  );
};
