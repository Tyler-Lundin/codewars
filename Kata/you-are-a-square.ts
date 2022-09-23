// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/typescript

export default function isSquare(n: number): boolean {
  return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(5))
