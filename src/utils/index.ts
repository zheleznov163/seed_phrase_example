export {default as COLOR} from './colors';

export function sliceIntoChunks<T>(arr: T[], size: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }
  return res;
}

export function hexAlpha(hex: string, percent: number): string {
  const str = Math.trunc((percent * 255) / 100).toString(16);
  return hex + (str.length === 2 ? str : `0${str}`);
}
