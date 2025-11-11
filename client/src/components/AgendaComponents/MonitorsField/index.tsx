import { Calendar, Clock, BookOpen } from "lucide-react"
import styles from './styles.module.css'
import type { Monitor } from "../../../pages/AgendaPage"
import type { MonthCalendar } from "../../../utils/Calendar"

interface MonitorsProps {
    isDarkMode: boolean
    monitors: Monitor[]
    selectedDate: number | null
    monthInfo: MonthCalendar
    handleSchedule: (monitor: Monitor) => void
}

export function MonitorsField({ isDarkMode, monitors, selectedDate, monthInfo, handleSchedule }: MonitorsProps) {
    
    return (
        <div className={styles.monitorsSection}>
          <h2 className={isDarkMode ? styles.sectionTitleDark : styles.sectionTitle}>
            Monitores Disponíveis
          </h2>

          {selectedDate ? (
            <p className={isDarkMode ? styles.selectedDateDark : styles.selectedDate}>
              <Calendar className={styles.calendarIcon} />
              Dia {selectedDate} de {monthInfo.name}
            </p>
          ) : (
            <p className={isDarkMode ? styles.noDateDark : styles.noDate}>
              Selecione uma data no calendário
            </p>
          )}

          <div className={styles.monitorsList}>
            {monitors.map((monitor) => (
              <div
                key={monitor.id}
                className={`${styles.monitorCard} ${isDarkMode ? styles.monitorCardDark : ""}`}
              >
                <div className={styles.monitorHeader}>
                  <div className={styles.avatar}>
                    <span className={styles.avatarText}>{monitor.avatar}</span>
                  </div>
                  <div className={styles.monitorInfo}>
                    <h3 className={isDarkMode ? styles.monitorNameDark : styles.monitorName}>
                      {monitor.name}
                    </h3>
                    <p className={isDarkMode ? styles.monitorSubjectDark : styles.monitorSubject}>
                      <BookOpen className={styles.infoIcon} />
                      {monitor.subject}
                    </p>
                  </div>
                </div>

                <div className={styles.monitorStats}>
                  <div className={isDarkMode ? styles.statDark : styles.stat}>
                    <span className={styles.statLabel}>Avaliação</span>
                    <span className={styles.statValue}>{monitor.rating}★</span>
                  </div>
                  <div className={isDarkMode ? styles.statDark : styles.stat}>
                    <span className={styles.statLabel}>Alunos</span>
                    <span className={styles.statValue}>{monitor.studentsHelped}</span>
                  </div>
                </div>

                <button onClick={() => handleSchedule(monitor)} className={styles.scheduleButton} disabled={!selectedDate} >
                  <Clock className={styles.buttonIcon} />
                  Agendar Monitoria
                </button>
              </div>
            ))}
          </div>
        </div>
    )

}