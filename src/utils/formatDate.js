import dayjs from 'dayjs'

export function formateMonthDay(date,format='MM月DD日') {
    return dayjs(date).format(format)
}

export function getDiffDays(startDate,endData) {
    return dayjs(endData).diff(startDate,'day')
}