export function getDate(date: Date) {
  const createdAt = new Date(date).getTime()
  const today = new Date().getTime()
  const timeDifference = today - createdAt
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24)

  if (daysDifference < 1) {
    return 'Há algumas horas'
  }

  return Math.floor(daysDifference)
}
