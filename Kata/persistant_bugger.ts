// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/typescript

export function persistence(num: number): number {
  let steps = 0

  while (num.toString().length > 1) {
    num = num
      .toString()
      .split('')
      .map((a) => parseInt(a))
      .reduce((a, b) => a * b)
    steps++
  }
  return steps
}

console.log(persistence(999))
