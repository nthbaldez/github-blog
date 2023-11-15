export function formatDescription(description: string) {
  const count = 178
  const formattedString =
    description.slice(0, count) + (description.length > count ? '...' : '')

  return formattedString
}
