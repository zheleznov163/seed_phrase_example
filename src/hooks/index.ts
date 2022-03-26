import {useMemo} from 'react';
import {Biometric} from '../classes';

export function useBiometric() {
  return useMemo(() => new Biometric(), []);
}
