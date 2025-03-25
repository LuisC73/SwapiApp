import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {InputProps} from '../../types';

export const Input = ({placeholder, value, onChangeText}: InputProps) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
  },
});
