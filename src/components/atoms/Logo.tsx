import {Image, StyleSheet} from 'react-native';
import {useTheme} from '../../context/ThemeContext';

const imageSourceDark = require('../../assets/images/logo-starwars.png');
const imageSourceLight = require('../../assets/images/logo-starwars-black.png');

export const Logo = () => {
  const {resolvedTheme} = useTheme();

  const imageSource =
    resolvedTheme === 'dark' ? imageSourceDark : imageSourceLight;

  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 40,
    objectFit: 'cover',
  },
});
