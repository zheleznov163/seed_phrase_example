import React from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import Icon from './Icon';
import Button from './Button';
import {COLOR} from '../utils';

type Props = {
  children?: string;
  style?: StyleProp<ViewStyle>;
  onCancel(): void;
};

export default function ModalFingerprint({style, onCancel}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Icon size={75} name="fingerprint" style={styles.fingerprint} />

      <Text style={styles.title}>Biometric Approve</Text>
      <Text style={styles.caption}>
        This is only a placeholder text showed for internal purposed only. Please don’t read it
        carefully!
      </Text>

      <Button style={styles.button} textStyle={styles.buttonText} onPress={onCancel}>
        Cancel
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.Dark2,
    borderRadius: 16,
    paddingVertical: 24,
    paddingHorizontal: 22,
    alignItems: 'center',
  },

  fingerprint: {
    marginTop: 40,
  },
  title: {
    color: COLOR.White,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 30,
    textAlign: 'center',

    marginTop: 30,
  },
  caption: {
    color: COLOR.Grey1,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',

    marginTop: 13,
  },

  button: {
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 8,

    marginTop: 43,
  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 19,
  },
});
