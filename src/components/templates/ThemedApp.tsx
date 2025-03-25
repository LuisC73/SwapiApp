import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {useTheme} from '../../context/ThemeContext';
import {AppNavigator} from '../../navigation/AppNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

export const ThemedApp = () => {
  const {resolvedTheme} = useTheme();
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer
        theme={resolvedTheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
