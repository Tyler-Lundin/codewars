// https://www.codewars.com/kata/5264d2b162488dc400000001/train/typescript

export function spinWords(words: string): string {
  return words
    .split(' ')
    .map((word) => {
      if (word.length >= 5) {
        return word.split('').reverse().join('')
      }
      return word
    })
    .join(' ')
}

console.log(spinWords('Welcome'))
