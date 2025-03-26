import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {DimensionValue} from 'react-native';

// atoms
export interface ButtonProps {
  width?: DimensionValue;
  text: string;
  onPress: () => void;
}

export interface IconProps {
  name: IconProp;
  size?: number;
  color?: string;
}

export interface InputProps {
  width?: DimensionValue;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

// molecules
export interface ButtonIconProps {
  icon: IconProps;
  onPress: () => void;
}

export interface CardProps {
  title?: string;
  children: React.ReactNode;
}

export interface TouchableCardProps extends CardProps {
  onPress: () => void;
}

export interface SearchInputProps {
  input: InputProps;
  button: ButtonProps;
}

// organisms

export interface CharacterListProps {
  data: any[];
  navigation: any;
}
