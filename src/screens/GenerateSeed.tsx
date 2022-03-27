import React, {useCallback, useEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Modal, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {COLOR, hexAlpha} from '../utils';
import {Icon, Button, Phrase, ModalFingerprint} from '../components';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';
import {useBiometric, useModal, useSeedPhrase} from '../hooks';

export type Props = StackScreenProps<RootStackParamList, 'GenerateSeed'>;

export default observer<Props>(({navigation}) => {
  const biometric = useBiometric();
  const phrase = useSeedPhrase();

  const [modal, open, close] = useModal();

  const [isHidden, setHidden] = useState(!biometric.access);
  useEffect(() => setHidden(!biometric.access), [biometric.access]);

  const onError = (error: any) => console.log('error', error);
  const checkAccess = async () => {
    if (await biometric.check()) {
      biometric.authenticate().then(close).catch(onError);
      open();
    } else {
      open();
    }
  };

  const togglePhrase = useCallback(
    async () =>
      !biometric.access && (await biometric.check()) ? checkAccess() : setHidden(value => !value),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [biometric.access],
  );

  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  //
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Icon name="logo" size={44} style={styles.icon} />
        </View>

        <View style={styles.center}>
          <Text style={styles.title}>Secret Recovery Phrase</Text>
          <Text style={styles.caption}>
            This is only a placeholder text showed for internal purposed only. Please don’t read it
            carefully!
          </Text>

          <View style={styles.toggle}>
            {isHidden ? (
              <Button
                mode="outline"
                label="Show Phrase"
                style={styles.buttonToggleOutline}
                IconRight={<Icon name="eye" size={16} style={styles.marginRight} />}
                onPress={togglePhrase}
              />
            ) : (
              <Button
                mode="contain"
                label="Hide Phrase"
                style={styles.buttonToggle}
                IconRight={<Icon name="eye_closed" size={16} style={styles.marginRight} />}
                onPress={togglePhrase}
              />
            )}
          </View>

          <ScrollView style={styles.scrollview} contentContainerStyle={styles.scrollviewContainer}>
            <Phrase hidden={isHidden} value={phrase} />
          </ScrollView>

          <View style={styles.footer}>
            <View style={styles.footerLeft}>
              <Button
                mode="text"
                onPress={goBack}
                textStyle={styles.marginRight}
                IconLeft={<Icon style={styles.rotate} name="arrow_r" size={10} />}>
                Back
              </Button>
            </View>

            <View style={styles.footerRight}>
              <Button
                onPress={open}
                disable={!biometric.access}
                IconRight={<Icon name="arrow_r" size={10} />}>
                Continue
              </Button>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <Modal transparent={true} visible={modal} onRequestClose={close}>
        <View style={styles.overlay}>
          <ModalFingerprint onCancel={close} />
        </View>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.Dark3,
    flexGrow: 1,
    paddingVertical: 16,
  },
  icon: {
    marginRight: 18,
  },
  toggle: {
    marginTop: 22,
    width: '55%',
  },

  rotate: {
    transform: [{rotate: '180deg'}],
  },
  marginRight: {
    marginLeft: 13,
  },

  buttonToggle: {
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 23,
  },
  buttonToggleOutline: {
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 21,
  },

  // ----- ScrollView -------
  scrollview: {
    flex: 1,
    marginTop: 16,
    marginBottom: 16,
  },
  scrollviewContainer: {
    paddingTop: 15,
    paddingBottom: 16,
  },

  // -------- Main --------
  header: {
    paddingHorizontal: 45,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  center: {
    flexGrow: 1,
    paddingHorizontal: 40,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {flex: 2, marginRight: 16},
  footerRight: {flex: 3},

  overlay: {
    paddingHorizontal: 27,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: hexAlpha(COLOR.Dark2, 60),
  },
  // ------ Text -------
  title: {
    color: COLOR.White,
    // fontFamily: 'Circular Std',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 30,
    marginTop: 34,
    marginBottom: 13,
  },
  caption: {
    color: COLOR.Grey1,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
  },
});
