const digitalRoot = (n: number): number => {
  if (n.toLocaleString().length > 1) {
    n = n
      .toString()
      .split('')
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b)
    if (n > 9) {
      return digitalRoot(n)
    }
  }
  return n
}

console.log('digitalRoot(16): ', digitalRoot(456))
