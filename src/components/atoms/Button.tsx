import {Pressable, StyleSheet} from 'react-native';
import {ButtonProps} from '../../types';

export const Button = ({text, onPress}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {text}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {},
});
