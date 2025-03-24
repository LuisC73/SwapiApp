import {View, Text, StyleSheet} from 'react-native';
import {CardProps} from '../../types';

export const Card = ({title, children}: CardProps) => {
  return (
    <View style={styles.card}>
      {title && <Text>{title}</Text>}
      <View>{children}</View>
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
