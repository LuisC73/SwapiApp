import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {AppNavigator} from '../../navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {useTheme} from '../../hooks';

export const ThemedApp = () => {
  const {theme} = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
