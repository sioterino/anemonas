import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react';
import { getMonthInfo, type MonthCalendar } from '../../../utils/Calendar';
import styles from './styles.module.css'

interface CalendarProps {
  isDarkMode: boolean
  selectedDate: number | null
  setSelectedDate: React.Dispatch<React.SetStateAction<number | null>>
  monthInfo: MonthCalendar
  setMonthInfo: React.Dispatch<React.SetStateAction<MonthCalendar>>
}

export function CalendarField({ isDarkMode, selectedDate, setSelectedDate, monthInfo, setMonthInfo }: CalendarProps) {

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, setMonthOffset] = useState(0)

      const handleMonthChange = (delta: number) => {
        setMonthOffset((prevOffset) => {
          const newOffset = Math.max(0, Math.min(2, prevOffset + delta));
          setMonthInfo(getMonthInfo(newOffset));
          setSelectedDate(null);
          return newOffset;
        });
      };
    
      const daysArray = Array.from({ length: monthInfo.days }, (_, i) => i + 1)
      const emptyDays = Array.from({ length: monthInfo.firstDayOfWeek }, (_, i) => i)
    
      const handleDateClick = (day: number) => {
        setSelectedDate(day)
      }

    return (
      <div className={styles.calendarSection}>
        <div className={`${styles.calendarCard} ${isDarkMode ? styles.calendarCardDark : ""}`}>

          <div className={styles.calendarHeader}>

            <button className={styles.arrowButton} onClick={() => handleMonthChange(-1)} >
              <ChevronLeft className={styles.calendarArrows} />
            </button>

            <h2 className={isDarkMode ? styles.monthTitleDark : styles.monthTitle}>
              {monthInfo.name} {monthInfo.year}
            </h2>

            <button className={styles.arrowButton} onClick={() => handleMonthChange(1)} >
              <ChevronRight className={styles.calendarArrows} />
            </button>

          </div>

          <div className={styles.weekDays}>
            {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((day) => (
              <div key={day} className={isDarkMode ? styles.weekDayDark : styles.weekDay}>
                {day}
              </div>
            ))}
          </div>

          <div className={styles.daysGrid}>
            {emptyDays.map((i) => ( <div key={`empty-${i}`} className={styles.emptyDay} /> ))}

            {daysArray.map((day) => (
              <button key={day} onClick={() => handleDateClick(day)}
                      className={`${styles.dayButton}  ${selectedDate === day ? styles.dayButtonSelected : ""}  ${isDarkMode ? styles.dayButtonDark : ""}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
}