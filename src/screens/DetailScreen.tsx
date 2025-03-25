import React from 'react';
import {Text, View} from 'react-native';
import {useThemeStyles} from '../hooks';

export const DetailScreen = ({route}: {route: any}) => {
  const {globalStyles} = useThemeStyles();
  const {item} = route.params;

  return (
    <View>
      <Text style={globalStyles.textBody}>{item.nombre}</Text>

      <View>
        <Text style={globalStyles.textBody}>Altura: {item?.altura} cm</Text>
        <Text style={globalStyles.textBody}>Masa: {item?.masa}</Text>
        <Text style={globalStyles.textBody}>
          Año de nacimiento: {item?.año_de_nacimiento}
        </Text>
        <Text style={globalStyles.textBody}>Género: {item?.genero}</Text>
      </View>

      <View>
        <Text style={globalStyles.textBody}>
          Color de cabello: {item?.color_de_cabello}
        </Text>
        <Text style={globalStyles.textBody}>
          Color de piel: {item?.color_de_piel}
        </Text>
        <Text style={globalStyles.textBody}>
          Color de ojos: {item?.color_de_ojos}
        </Text>
      </View>
    </View>
  );
};
