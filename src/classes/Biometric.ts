import TouchID, {AuthenticateConfig} from 'react-native-touch-id';
import {makeAutoObservable} from 'mobx';
import {COLOR} from '../utils';

export default class Biometric {
  access = false;

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  setAccess(access: boolean) {
    this.access = access;
  }

  async authenticate() {
    await TouchID.authenticate('check for seed_phrase_example', Biometric.config);
    this.setAccess(true);
  }

  async check() {
    const biometryType = await TouchID.isSupported({unifiedErrors: false});
    return !(biometryType === 'FaceID');
  }

  private static config: AuthenticateConfig = {
    unifiedErrors: false,
    passcodeFallback: false,
    title: 'No idea how to hide',
    imageColor: COLOR.Dark1,
    fallbackLabel: '',
    sensorDescription: '',
    sensorErrorDescription: '',
  };
}
