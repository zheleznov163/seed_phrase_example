import React, {useMemo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Word from './Word';
import {sliceIntoChunks} from '../utils';

type Props = {
  value: string[];
  hidden?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default ({value, style, hidden = true}: Props) => {
  const words = useMemo(() => sliceIntoChunks(value, 2), [value]);

  return (
    <View style={style}>
      {words.map(([first, second], index) => (
        <View key={first + second} style={styles.container}>
          <Word hidden={hidden} index={index * 2} text={first} style={styles.word} />
          <Word hidden={hidden} index={index * 2 + 1} text={second} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  word: {
    marginRight: 10,
  },
});
