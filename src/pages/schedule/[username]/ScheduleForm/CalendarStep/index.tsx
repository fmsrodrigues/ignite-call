import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

import { api } from '@/lib/axios'

import { Calendar } from '@/components/Calendar'

import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [availability, setAvailability] = useState(null)

  const router = useRouter()
  const username = String(router.query.username)

  useEffect(() => {
    if (!selectedDate) {
      return
    }

    api
      .get(`/users/${username}/availability`, {
        params: {
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
        },
      })
      .then((res) => {
        console.log(res.data)
      })
  }, [username, selectedDate])

  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : null

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {!!isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            {weekDay} <span>{describedDate}</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
            <TimePickerItem>06:00h</TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  )
}
