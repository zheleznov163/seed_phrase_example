import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {COLOR} from '../utils';

type Props = {
  children?: string;
  label?: string;

  onPress(): void;
  disable?: boolean;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  mode?: 'outline' | 'contain' | 'text';

  IconLeft?: JSX.Element;
  IconRight?: JSX.Element;
};

export default function Button({
  children,
  label,
  onPress,
  disable = false,
  mode = 'contain',
  textStyle,
  IconLeft,
  IconRight,
  style,
}: Props) {
  return (
    <TouchableOpacity disabled={disable} onPress={onPress}>
      <View style={[styles.size, styles[mode].container, style, disable && styles.disable]}>
        {IconLeft && IconLeft}
        <Text style={[styles[mode].text, textStyle]}>{children || label}</Text>
        {IconRight && IconRight}
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  disable: {
    opacity: 0.2,
  },
  size: {
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 18,
  },

  // ------ Mode ---------
  outline: StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',

      borderWidth: 2,
      borderColor: COLOR.White,
    },
    text: {
      color: COLOR.White,
    },
  }),
  text: StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 0,
    },
    text: {
      color: COLOR.White,
    },
  }),
  contain: StyleSheet.create({
    container: {
      backgroundColor: COLOR.White,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      color: COLOR.Dark3,
    },
  }),
};
