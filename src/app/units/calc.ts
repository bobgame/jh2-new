export const calcYlNum = (value: number): number => {
  let ylNum = 0
  if (value >= 90) {
    ylNum = 4
  } else if (value >= 65) {
    ylNum = 3
  } else if (value >= 40) {
    ylNum = 2
  } else if (value >= 15) {
    ylNum = 1
  }
  return ylNum
}
