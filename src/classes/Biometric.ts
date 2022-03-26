import TouchID from 'react-native-touch-id';
import {makeAutoObservable} from 'mobx';
import {COLOR} from '../utils';

type Status = boolean;

export default class Biometric {
  access: Status = false;

  static default = {
    optionalConfigObject: {
      unifiedErrors: false,
      passcodeFallback: false,
      title: '',
      imageColor: COLOR.Dark1,
      sensorDescription: '',
      sensorErrorDescription: '',
      cancelText: '',
      fallbackLabel: '',
    },
  };

  constructor() {
    makeAutoObservable(this, {}, {autoBind: true});
  }

  setAccess(access: Status) {
    this.access = access;
  }

  async check() {
    return TouchID.isSupported({unifiedErrors: false}).then(done => {
      this.setAccess(true);
      console.log('done', done);
    });
  }
}
