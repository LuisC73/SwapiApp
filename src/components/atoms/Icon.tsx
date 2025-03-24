import React from 'react';
import {View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHouse, faSearch} from '@fortawesome/free-solid-svg-icons';
import {library} from '@fortawesome/fontawesome-svg-core';
import { IconProps } from '../../types';

library.add(faHouse, faSearch);

export const Icon = ({name, size = 16, color = 'black'}: IconProps) => {
  return (
    <View>
      <FontAwesomeIcon icon={name} size={size} color={color} />
    </View>
  );
};
