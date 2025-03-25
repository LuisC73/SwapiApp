import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {InputProps} from '../../types';
import {useThemeStyles} from '../../hooks';

export const Input = ({
  width,
  placeholder,
  value,
  onChangeText,
}: InputProps) => {
  const {colors, spacing} = useThemeStyles();

  const localStyles = StyleSheet.create({
    input: {
      width: width ?? 'auto',
      padding: spacing.small,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colors.primary,
      backgroundColor: colors.background,
    },
  });

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.placeholder}
      value={value}
      onChangeText={onChangeText}
      style={localStyles.input}
    />
  );
};
