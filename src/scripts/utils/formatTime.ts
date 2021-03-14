export const formatDisplayTime = (
time: number,
): string => {
  return `${Math.floor(time / 60)} : ${('0' + time % 60).slice(-2)}`
}

export const formatCowntDownClock = (
time: Number
): string => {
  return `${("00" + time).slice(-2)} : 00`
}

