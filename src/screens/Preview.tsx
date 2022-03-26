import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import {Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../utils';
import {Icon, Button} from '../components';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/types';

export type Props = StackScreenProps<RootStackParamList, 'Preview'>;

const statusBarHeight = Platform.OS === 'ios' ? 50 : StatusBar.currentHeight;

export default observer<Props>(({navigation}) => {
  const navtoGenerateSeed = useCallback(() => navigation.push('GenerateSeed'), [navigation]);
  return (
    <>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Image source={require('../assets/png/background.png')} style={styles.image} />

          <View style={styles.header}>
            <Icon name="logo" size={44} style={styles.icon} />
            <Text style={styles.logo}>bitsong wallet</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.title}>
            Welcome to <Text style={styles.bold}>BitSong Wallet</Text>
          </Text>

          <Button onPress={navtoGenerateSeed} IconRight={<Icon name="arrow_r" size={8} />}>
            Create new wallet
          </Button>
        </View>
      </SafeAreaView>
    </>
  );
});

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLOR.Dark3,
    paddingVertical: 16,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: COLOR.Dark3,
    alignItems: 'stretch',
  },

  icon: {
    marginRight: 18,
  },
  image: {
    position: 'absolute',
    top: -statusBarHeight!,
    left: 0,
    width: '100%',
  },

  header: {
    paddingHorizontal: 45,
    paddingVertical: 16,
    flexDirection: 'row',
  },
  footer: {
    paddingHorizontal: 48,
  },

  // ------ Text -------
  logo: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 23,
    /* identical to box height */
    color: COLOR.White,
    width: 70,
  },
  title: {
    color: COLOR.White,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 36,
    lineHeight: 46,
    marginBottom: 34,
  },
  bold: {
    fontWeight: '600',
  },
});
