import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen, DetailScreen} from '../screens';
import {Icon} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabBarIcon =
  (route: {name: string}) =>
  ({color, size}: {color: string; size: number}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Search') {
      iconName = 'search';
    }

    return <Icon name={iconName} size={size} color={color} />;
  };

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: renderTabBarIcon(route),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'blue',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
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
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
