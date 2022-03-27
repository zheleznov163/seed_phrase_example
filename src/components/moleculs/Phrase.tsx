import React, {memo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Word from '../atoms/Word';
import {sliceIntoChunks} from '../../utils';

type Props = {
  value: string[];
  hidden?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default memo(({value, style, hidden = true}: Props) => (
  <View style={style}>
    {sliceIntoChunks(value, 2).map(([first, second], index) => (
      <View key={first + second + index} style={styles.container}>
        <Word hidden={hidden} index={index * 2 + 1} text={first} style={styles.word} />
        <Word hidden={hidden} index={index * 2 + 2} text={second} />
      </View>
    ))}
  </View>
));

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  word: {
    marginRight: 10,
  },
});
