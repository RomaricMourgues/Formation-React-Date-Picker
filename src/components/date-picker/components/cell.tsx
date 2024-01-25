import { isSameDay } from '../utils'

type DateCellProps = {
  date?: Date
  label?: string
  active?: boolean
  onClick?: () => void
  disabled?: boolean
  className?: string
}

/**
 * DateCell is a cell in the date picker, it can be a date, or a day of the week.
 * It can be active or not, and can be disabled.
 * It can be clicked to select a date.
 * If date is defined: it will be used to display the date.
 * If date is not defined: label will be used to display the day of the week.
 */
export const DateCell = ({
  date,
  label,
  active,
  onClick,
  disabled,
  className,
}: DateCellProps) => {
  let today = false
  if (date) {
    today = isSameDay(date, new Date())
  }

  return (
    <div
      className={
        `text-sm cursor-pointer p-1
         rounded-md flex items-center justify-center
         ${disabled ? ' text-slate-400' : ' font-semibold text-slate-800'}
         ${today && !active ? ' !text-blue-500' : ''}
         ${active ? ' bg-blue-500 text-white' : 'hover:bg-blue-100 '}` +
        (className || '')
      }
      onClick={onClick}
    >
      {label || date?.getDate()}
    </div>
  )
}
