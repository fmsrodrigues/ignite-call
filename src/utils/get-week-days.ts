interface GetWeekDaysParams {
  short?: boolean
}

export function getWeekDays({ short = false }: GetWeekDaysParams = {}) {
  const formatter = new Intl.DateTimeFormat('pt-BR', { weekday: 'long' })

  return Array.from(Array(7).keys()).map((day) => {
    const weekDay = formatter.format(new Date(Date.UTC(2021, 5, day)))

    if (short) {
      const capitalizedWeekDay = `${weekDay.substring(0, 3).toUpperCase()}`

      return capitalizedWeekDay
    }

    const capitalizedWeekDay = `${weekDay
      .charAt(0)
      .toUpperCase()}${weekDay.slice(1)}`

    return capitalizedWeekDay
  })
}
