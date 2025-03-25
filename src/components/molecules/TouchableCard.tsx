import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableCardProps} from '../../types';
import {Button} from '../atoms/Button';

export const TouchableCard = ({
  title,
  children,
  onPress,
}: TouchableCardProps) => {
  return (
    <View style={styles.card}>
      {title && <Text>{title}</Text>}
      <View>{children}</View>
      <Button text="Ver detalles" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'black',
  },
});
