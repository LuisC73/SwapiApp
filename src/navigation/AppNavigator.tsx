import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, DetailScreen} from '../screens';
import {Header, Icon} from '../components';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import { useThemeStyles } from '../hooks';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBarIcon =
  (route: {name: string}) =>
  ({color, size}: {color: string; size: number}) => {
    let iconName;

    if (route.name === 'Inicio') {
      iconName = 'home';
    } else if (route.name === 'Buscar') {
      iconName = 'search';
    }

    return (
      <Icon name={(iconName as IconProp) ?? ''} size={size} color={color} />
    );
  };

const renderHeader = () => <Header />;

const HomeTabs = () => {
    const {colors} = useThemeStyles();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: renderTabBarIcon(route),
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.secondary,
        header: renderHeader,
      })}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Buscar" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detalles"
        component={DetailScreen}
        options={{title: 'Detalles del Personaje'}}
      />
    </Stack.Navigator>
  );
};
