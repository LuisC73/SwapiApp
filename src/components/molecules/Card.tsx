import {View, Text, StyleSheet} from 'react-native';
import {CardProps} from '../../types';
import { useThemeStyles } from '../../hooks';

export const Card = ({title, children}: CardProps) => {
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
    </View>
  );
};
