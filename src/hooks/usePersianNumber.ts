import { toPersianDigits, toEnglishDigits } from '../utils/persian'

export function usePersianNumber() {
  return {
    toPersian: toPersianDigits,
    toEnglish: toEnglishDigits,
  }
}
