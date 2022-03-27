import {useCallback, useEffect, useMemo, useState} from 'react';
import {Biometric, Seed} from '../classes';

export function useBiometric() {
  return useMemo(() => new Biometric(), []);
}

export function useModal() {
  const [modal, setModal] = useState(false);

  const open = useCallback(() => setModal(true), []);
  const close = useCallback(() => setModal(false), []);

  return [modal, open, close] as const;
}

export function useSeedPhrase() {
  const [phrase, setPhrase] = useState<string[]>([]);
  useEffect(() => {
    Seed.generate().then(setPhrase);
  }, []);

  return phrase;
}
