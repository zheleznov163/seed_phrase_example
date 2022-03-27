import {Buffer} from 'buffer';
import {getRandomValues} from '../utils';
const bip39 = require('../utils/bip39.browser');

export default class Seed {
  static async generate(strength: number = 256) {
    if (strength % 32 !== 0) {
      throw new TypeError('invalid entropy');
    }
    return bip39
      .entropyToMnemonic(Buffer.from(getRandomValues(new Uint8Array(strength / 8))).toString('hex'))
      .split(' ');
  }
}
