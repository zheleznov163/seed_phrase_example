import {useMemo} from 'react';
import {Biometric} from '../classes';

export function useBiometric() {
  return useMemo(() => new Biometric(), []);
}

export function useSeedPhrase() {
  const [phrase, setPhrase] = useState<string[]>([]);
  useEffect(() => {
    Seed.generate().then(setPhrase);
  }, []);

  return phrase;
}
