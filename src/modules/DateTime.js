import { DateTime } from 'luxon'

export default DateTime

export const toSQL = date =>
  date.toFormat('yyyy-MM-dd hh:mm:ss')

export const toSystem = date =>
  date.toFormat('yyyy-MM-dd')

export const trimTime = date =>
  DateTime
    .fromFormat(
      date,
      'yyyy-MM-dd hh:mm:ss'
    )
    .toFormat('yyyy-MM-dd')
