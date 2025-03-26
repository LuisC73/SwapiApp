import {Pressable, StyleSheet} from 'react-native';
import {Icon} from '../atoms/Icon';
import {ButtonIconProps} from '../../types';
import {useThemeStyles} from '../../hooks';

export const ButtonIcon = ({icon, onPress}: ButtonIconProps) => {
  const {colors, spacing} = useThemeStyles();

  const localStyles = StyleSheet.create({
    button: {
      width: 'auto',
      padding: spacing.small,
      borderWidth: 1,
      borderRadius: '50%',
      borderColor: colors.primary,
      backgroundColor: colors.primary,
    },
    pressedButton: {
      backgroundColor: colors.secondary,
    },
  });

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        localStyles.button,
        pressed && localStyles.pressedButton,
      ]}>
      <Icon {...icon} />
    </Pressable>
  );
};
