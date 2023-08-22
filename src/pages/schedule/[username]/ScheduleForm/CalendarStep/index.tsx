import { Calendar } from '@/components/Calendar'
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerItem,
  TimePickerList,
} from './styles'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {!!isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            Terça-feira <span>20 de setembro</span>
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
