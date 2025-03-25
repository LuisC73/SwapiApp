import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableCardProps} from '../../types';
import {Button} from '../atoms/Button';
import {useThemeStyles} from '../../hooks';

export const TouchableCard = ({
  title,
  children,
  onPress,
}: TouchableCardProps) => {
  const {colors, spacing, globalStyles} = useThemeStyles();

  const localStyles = StyleSheet.create({
    card: {
      flexDirection: 'column',
      gap: spacing.medium,
      paddingVertical: spacing.large,
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
    cardContent: {
      flexDirection: 'column',
      gap: spacing.small,
    },
  });

  return (
    <View style={localStyles.card}>
      {title && <Text style={globalStyles.title}>{title}</Text>}
      <View style={localStyles.cardContent}>{children}</View>
      <Button text="Ver detalles" onPress={onPress} />
    </View>
  );
};
