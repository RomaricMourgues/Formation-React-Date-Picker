import { useState } from 'react'
import { Button } from '../atoms/button'
import { DatePicker } from '../components/date-picker'

export const App = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="bg-slate-100 p-8">
      <DatePicker value={date} onChange={(date) => setDate(date)} />
      <br />
      <br />
      Selected date: {date?.toLocaleDateString()}
    </div>
  )
}
