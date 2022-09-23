//

export class Kata {
  static dnaStrand(dna: string) {
    return dna.replace(/./g, (c) => {
      switch (c) {
        case 'A':
          return 'T'
        case 'T':
          return 'A'
        case 'C':
          return 'G'
        case 'G':
          return 'C'
        default:
          return c
      }
    })
  }
}

console.log('Kata.dnaStrand("AAAA"): ', Kata.dnaStrand('AAAA'))
