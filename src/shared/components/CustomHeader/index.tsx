import React, {useMemo} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';
import {StackHeaderProps} from '@react-navigation/stack/lib/typescript/src/types';

import {hp, wp, scFontsize} from '../../utils/dimensions';

type Prop = StackHeaderProps;

const CustomHeader = ({previous, scene, navigation}: Prop) => {
  const {options} = useMemo(() => scene.descriptor, [scene.descriptor]);

  const title = useMemo(
    () =>
      options.headerTitle !== undefined
        ? options.headerTitle
        : options.title !== undefined
        ? options.title
        : scene.route.name,
    [scene.route.name, options.title, options.headerTitle],
  );

  return (
    <View
      style={{
        backgroundColor: 'red',
        height: hp(141),
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: wp(55),
        paddingLeft: wp(55),
      }}>
      <Image
        source={require('../../assets/menu.png')}
        style={{
          height: hp(32),
          width: wp(37),
          marginRight: wp(49),
        }}
      />
      {previous && (
        <TouchableHighlight onPress={navigation.goBack}>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={{
              height: hp(32),
              width: wp(37),
              marginRight: wp(49),
            }}
          />
        </TouchableHighlight>
      )}
      {title && (
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: scFontsize(49),
          }}>
          {title}
        </Text>
      )}
    </View>
  );
};

export default CustomHeader;
