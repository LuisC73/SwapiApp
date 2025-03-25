import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useThemeStyles} from '../hooks';

export const DetailScreen = ({route}: {route: any}) => {
  const {spacing, globalStyles} = useThemeStyles();
  const {item} = route.params;

  const localStyles = StyleSheet.create({
    container: {
      ...globalStyles.screenContainer,
      flexDirection: 'column',
      gap: spacing.medium,
      padding: spacing.large,
    },
  });

  return (
    <View style={localStyles.container}>
      <Text style={globalStyles.title}>{item.nombre}</Text>

      <View>
        <Text style={globalStyles.text}>Altura: {item?.altura} cm</Text>
        <Text style={globalStyles.text}>Masa: {item?.masa}</Text>
        <Text style={globalStyles.text}>
          Año de nacimiento: {item?.año_de_nacimiento}
        </Text>
        <Text style={globalStyles.text}>Género: {item?.genero}</Text>
      </View>

      <View>
        <Text style={globalStyles.text}>
          Color de cabello: {item?.color_de_cabello}
        </Text>
        <Text style={globalStyles.text}>
          Color de piel: {item?.color_de_piel}
        </Text>
        <Text style={globalStyles.text}>
          Color de ojos: {item?.color_de_ojos}
        </Text>
      </View>
    </View>
  );
};
