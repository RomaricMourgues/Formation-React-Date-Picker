import { useEffect, useState } from 'react'
import { Button } from '../../atoms/button'
import { DateCell } from './cell'
import { Header } from './header'
import { isSameDay } from './utils'

type DatePickerProps = {
  value?: Date
  onChange: (date?: Date) => void // This is a callback function
}

/**
 * DatePicker is a component that allows the user to select a date.
 */
export const DatePicker = (props: DatePickerProps) => {
  const value = props.value || new Date()
  const [month, setMonth] = useState(value)
  const [activeDate, setActiveDate] = useState<Date | undefined>(value)

  // If parent changes the value, we force-update the active date
  useEffect(() => {
    setActiveDate(value)
  }, [value])

  const firstDayOfMonth = new Date(
    month.getFullYear(),
    month.getMonth(),
    1
  ).getDay()

  // Construct the dates list (42 days for a 7x6 grid)
  const dates = []
  for (let i = -firstDayOfMonth; i < 7 * 6 - firstDayOfMonth; i++) {
    dates.push(new Date(month.getFullYear(), month.getMonth(), i + 1))
  }

  return (
    <div className="w-64 bg-white p-4 shadow-md rounded-xl flex flex-col">
      <Header month={month} setMonth={setMonth} />

      <div className="grid grid-cols-7 gap-1 my-4">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
          <DateCell key={day} label={day} disabled />
        ))}
        {dates.map((date, index) => (
          <DateCell
            key={index}
            date={date}
            active={isSameDay(activeDate, date)}
            onClick={() => setActiveDate(date)}
            disabled={date.getMonth() !== month.getMonth()}
          />
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Button
          onClick={() => {
            setActiveDate(props.value)
            props.onChange(props.value)
          }}
        >
          Cancel
        </Button>
        <Button theme="primary" onClick={() => props.onChange(activeDate)}>
          Save
        </Button>
      </div>
    </div>
  )
}
