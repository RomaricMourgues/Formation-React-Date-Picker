import { Button } from '../../atoms/button'

/**
 * Header is the header of the date picker with buttons to navigate between months.
 */
export const Header = ({
  month,
  setMonth,
}: {
  month: Date
  setMonth: (date: Date) => void
}) => {
  return (
    <div className="flex justify-between items-center">
      <Button
        onClick={() => {
          const newMonth = new Date(month)
          newMonth.setMonth(month.getMonth() - 1)
          setMonth(newMonth)
        }}
      >
        {'<'}
      </Button>
      <div className="font-semibold">
        {month.toLocaleString('default', { month: 'long' })}{' '}
        {month.getFullYear()}
      </div>
      <Button
        onClick={() => {
          const newMonth = new Date(month)
          newMonth.setMonth(month.getMonth() + 1)
          setMonth(newMonth)
        }}
      >
        {'>'}
      </Button>
    </div>
  )
}
