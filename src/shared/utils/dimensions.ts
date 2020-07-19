import {
  heightPercentageToDP as hp2dp,
  widthPercentageToDP as wp2dp,
} from 'react-native-responsive-screen';

import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const BASE_SCREEN_WIDTH = 1080;
const BASE_SCREEN_HEIGHT = 1920;
const SCALED_WIDTH = width / BASE_SCREEN_WIDTH;
const SCALED_HEIGHT = height / BASE_SCREEN_HEIGHT;
const SCALE = Math.min(SCALED_WIDTH, SCALED_HEIGHT);

const wp = (dimension: number) => {
  return wp2dp((dimension / BASE_SCREEN_WIDTH) * 100 + '%');
};

const hp = (dimension: number) => {
  return hp2dp((dimension / BASE_SCREEN_HEIGHT) * 100 + '%');
};

const scFontsize = (size: number) => {
  return Math.ceil(size * SCALE);
};

export {wp, hp, scFontsize};
