import { toast } from 'sonner';
import { X, Calendar, Clock } from "lucide-react"
import { useState, useEffect } from "react"

import styles from "./styles.module.css"

interface Monitor {
  id: string
  name: string
  subject: string
  rating: number
  studentsHelped: number
  avatar: string
}

interface MonthCalendar {
  name: string
  year: number
  days: number
  firstDayOfWeek: number
}

interface ScheduleModalProps {
  isOpen: boolean
  onClose: () => void
  monitor: Monitor | null
  selectedDate: number | null
  monthInfo: MonthCalendar
  isDarkMode: boolean
}

export function ScheduleModal({
  isOpen,
  onClose,
  monitor,
  selectedDate,
  monthInfo,
  isDarkMode,
}: ScheduleModalProps) {
  
  const [selectedTime, setSelectedTime] = useState("")
  const [topic, setTopic] = useState("")

  const availableTimes = [
    "08:00", "09:00", "10:00", "11:00",
    "14:00", "15:00", "16:00", "17:00"
  ]

  // Reset fields when modal closes
  useEffect(() => {
    if (!isOpen) {
      setSelectedTime("")
      setTopic("")
    }
  }, [isOpen])

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Agendando monitoria:", {
      monitor: monitor?.name,
      date: `${selectedDate} de ${monthInfo.name} de ${monthInfo.year}`,
      time: selectedTime,
      topic,
    })

    toast.success(`Monitoria agendada com ${monitor?.name} para o dia ${selectedDate} de ${monthInfo.name} de ${monthInfo.year} às ${selectedTime}!`)
    onClose()
  }

  if (!isOpen || !monitor) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={`${styles.modal} ${isDarkMode ? styles.dark : ""}`}>
        <div className={styles.header}>
          <div className={styles.monitorInfo}>
            <div className={styles.avatar}>
              <span className={styles.avatarText}>{monitor.avatar}</span>
            </div>
            <div>
              <h3 className={isDarkMode ? styles.titleDark : styles.title}>
                Agendar com {monitor.name}
              </h3>
              <p className={isDarkMode ? styles.subtitleDark : styles.subtitle}>
                {monitor.subject}
              </p>
            </div>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <X className={styles.closeIcon} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Data selecionada */}
          <div className={styles.formGroup}>
            <label className={`${styles.label} ${isDarkMode ? styles.labelDark : ""}`}>
              <Calendar className={styles.labelIcon} />
              Data Selecionada
            </label>
            <div className={`${styles.dateDisplay} ${isDarkMode ? styles.dateDisplayDark : ""}`}>
              Dia {selectedDate} de {monthInfo.name} de {monthInfo.year}
            </div>
          </div>

          {/* Horário */}
          <div className={styles.formGroup}>
            <label htmlFor="time" className={`${styles.label} ${isDarkMode ? styles.labelDark : ""}`}>
              <Clock className={styles.labelIcon} />
              Horário
            </label>
            <select
              id="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
              className={`${styles.select} ${isDarkMode ? styles.selectDark : ""}`}
            >
              <option value="">Selecione um horário</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Assunto */}
          <div className={styles.formGroup}>
            <label htmlFor="topic" className={`${styles.label} ${isDarkMode ? styles.labelDark : ""}`}>
              Assunto da Monitoria
            </label>
            <textarea
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Dúvidas sobre derivadas e integrais"
              required
              rows={4}
              className={`${styles.textarea} ${isDarkMode ? styles.textareaDark : ""}`}
            />
          </div>

          {/* Botões */}
          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={`${styles.button} ${styles.cancelButton}`}
            >
              Cancelar
            </button>
            <button type="submit" className={`${styles.button} ${styles.submitButton}`}>
              Confirmar Agendamento
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
