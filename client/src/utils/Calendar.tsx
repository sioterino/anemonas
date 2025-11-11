function isLeapYear(year: number): boolean {
    if (year % 400 === 0) return true
    if (year % 100 === 0) return false
    return year % 4 === 0
}

interface Month {
    month: number
    name: string
    short: string
    days: number
}

interface MonthCalendar {
    month: number,
    name: string,
    short: string,
    days: number,
    year: number,
    dayOfMonth: number,
    firstDayOfWeek: number
}

const months: Month[] = [
    { month: 1, name: "Janeiro", short: "Jan", days: 31 },
    { month: 2, name: "Fevereiro", short: "Fev", days: 28 },
    { month: 3, name: "Março", short: "Mar", days: 31 },
    { month: 4, name: "Abril", short: "Abr", days: 30 },
    { month: 5, name: "Maio", short: "Mai", days: 31 },
    { month: 6, name: "Junho", short: "Jun", days: 30 },
    { month: 7, name: "Julho", short: "Jul", days: 31 },
    { month: 8, name: "Agosto", short: "Ago", days: 31 },
    { month: 9, name: "Setembro", short: "Set", days: 30 },
    { month: 10, name: "Outubro", short: "Out", days: 31 },
    { month: 11, name: "Novembro", short: "Nov", days: 30 },
    { month: 12, name: "Dezembro", short: "Dez", days: 31 },
]

function getMonthInfo(offset = 0): MonthCalendar {

    const today = new Date()
    const year = today.getFullYear()
    const monthIndex = today.getMonth() + offset

    const date = new Date(year, monthIndex, 1)

    const adjustedYear = date.getFullYear()
    const adjustedMonthIndex = date.getMonth() // 0–11
    const dayOfMonth = today.getDate()

    const currentMonth = { ...months[adjustedMonthIndex] }

    if (currentMonth.month === 2 && isLeapYear(adjustedYear))
        currentMonth.days = 29

    const firstDayOfWeek = new Date(adjustedYear, adjustedMonthIndex, 1).getDay()

    return {
        ...currentMonth,
        year: adjustedYear,
        dayOfMonth,
        firstDayOfWeek,
    }
}

export { getMonthInfo }
export type { MonthCalendar }