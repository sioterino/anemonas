"use client"

import { Star, Calendar } from "lucide-react"
import styles from "./styles.module.css"

interface Monitor {
  id: string
  name: string
  subject: string
  description: string
  rating: number
  studentsHelped: number
  availability: string
  avatar: string
}

interface MonitorCardProps {
  monitor: Monitor
  isDarkMode: boolean
  onSendMessage: () => void
}

export function MonitorCard({ monitor, isDarkMode, onSendMessage }: MonitorCardProps) {
  return (
    <div className={`${styles.card} ${isDarkMode ? styles.dark : ""}`}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <span className={styles.avatarText}>{monitor.avatar}</span>
        </div>
        <div className={styles.info}>
          <h3 className={isDarkMode ? styles.nameDark : styles.name}>{monitor.name}</h3>
          <p className={isDarkMode ? styles.roleDark : styles.role}>Monitor • {monitor.subject}</p>
        </div>
      </div>

      <p className={`${styles.description} ${isDarkMode ? styles.descriptionDark : ""}`}>{monitor.description}</p>

      <div className={styles.stats}>
        <div className={styles.rating}>
          <Star className={styles.starIcon} />
          <span className={isDarkMode ? styles.ratingTextDark : styles.ratingText}>{monitor.rating}</span>
        </div>
        <span className={isDarkMode ? styles.studentsTextDark : styles.studentsText}>
          • {monitor.studentsHelped} alunos atendidos
        </span>
      </div>

      <div className={styles.availability}>
        <Calendar className={`${styles.calendarIcon} ${isDarkMode ? styles.iconDark : ""}`} />
        <span className={isDarkMode ? styles.availabilityTextDark : styles.availabilityText}>
          {monitor.availability}
        </span>
      </div>

      <button onClick={onSendMessage} className={styles.button}>
        Enviar Mensagem
      </button>
    </div>
  )
}
