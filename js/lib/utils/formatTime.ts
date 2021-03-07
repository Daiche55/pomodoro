import dayjs from 'dayjs';

export const formatTime = (
time: Date,
format: string
): string => {
  return dayjs(time).format(format)
}

export const formatCowntDownClock = (
time: Number
): string => {
  return `${("00" + time).slice(-2)} : 00`
}
