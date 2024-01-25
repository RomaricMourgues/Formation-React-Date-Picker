/**
 * isSameDay - Check if two dates are the same day
 */
export const isSameDay = (date1?: Date, date2?: Date) => {
  return (
    !!date1 &&
    !!date2 &&
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}
