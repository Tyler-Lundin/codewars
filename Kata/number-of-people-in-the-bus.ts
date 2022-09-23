export function number(busStops: [number, number][]): number {
  return busStops.map((stop) => stop.reduce((a, b) => a - b)).reduce((a, b) => a + b)
}

console.log(
  '[[10,0],[3,5],[5,8]]',
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
)
