export const findOdd = (xs: number[]): number => {
  const counts = xs.reduce((acc, x) => {
    acc[x] = (acc[x] || 0) + 1
    return acc
  }, {} as Record<number, number>)
  return Number(Object.entries(counts).find(([_, count]) => count % 2 === 1)?.[0])
}

console.log(
  '[20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5): ',
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
)
