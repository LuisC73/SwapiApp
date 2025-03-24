import {IconProp} from '@fortawesome/fontawesome-svg-core';

// atoms
export interface ButtonProps {
  text: string;
  onPress: () => void;
}

export interface IconProps {
  name: IconProp;
  size?: number;
  color?: string;
}

export interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

// molecules

export interface CardProps {
  data: any;
}

export interface CharacterCardProps extends CardProps {
  onPress: () => void;
}

export interface SearchInputProps {
  input: InputProps;
  button: ButtonProps;
  onSearch: () => void;
}

// organisms

export interface CharacterListProps {
  data: any[];
  navigation: any;
}
