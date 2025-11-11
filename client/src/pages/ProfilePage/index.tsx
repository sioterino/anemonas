"use client"

import { Mail, Phone, BookOpen, Calendar, Clock } from "lucide-react"
import { useState } from "react"
import { EditProfileModal } from "../../components/EditProfileModal"
import styles from "./styles.module.css"

interface ProfilePageProps {
  isDarkMode: boolean
}

interface Monitoria {
  id: string
  subject: string
  time: string
  monitor: string
}

export function ProfilePage({ isDarkMode }: ProfilePageProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const upcomingMonitorias: Monitoria[] = [
    {
      id: "1",
      subject: "Matemática",
      time: "14:00 - 15:00",
      monitor: "Ana Costa",
    },
    {
      id: "2",
      subject: "Programação",
      time: "16:30 - 17:30",
      monitor: "Pedro Silva",
    },
  ]

  return (
    <>
      <div className={styles.header}>
        <h1 className={isDarkMode ? styles.titleDark : styles.title}>Bem-vindo ao Perfil</h1>
        <p className={isDarkMode ? styles.descriptionDark : styles.description}>
          Acompanhe seu desempenho e monitorias
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.profileSection}>
          <div className={`${styles.card} ${isDarkMode ? styles.cardDark : ""}`}>
            <div className={styles.profileHeader}>
              <div className={styles.profileInfo}>
                <div className={styles.avatar}>
                  <span className={styles.avatarText}>JS</span>
                </div>
                <div>
                  <div className={styles.nameRow}>
                    <h2 className={isDarkMode ? styles.nameDark : styles.name}>João Silva</h2>
                    <span className={styles.badge}>Aluno • ADS 2023</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsEditModalOpen(true)} className={styles.editButton}>
                Editar
              </button>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Mail className={`${styles.icon} ${isDarkMode ? styles.iconDark : ""}`} />
                <span className={isDarkMode ? styles.contactTextDark : styles.contactText}>joao@ifsc.edu.br</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={`${styles.icon} ${isDarkMode ? styles.iconDark : ""}`} />
                <span className={isDarkMode ? styles.contactTextDark : styles.contactText}>(48) 9999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <BookOpen className={`${styles.icon} ${isDarkMode ? styles.iconDark : ""}`} />
                <span className={isDarkMode ? styles.contactTextDark : styles.contactText}>5 monitorias agendadas</span>
              </div>
            </div>
          </div>

          <div className={`${styles.card} ${styles.monitoriasCard} ${isDarkMode ? styles.cardDark : ""}`}>
            <div className={styles.monitoriasHeader}>
              <Calendar className={`${styles.calendarIcon} ${isDarkMode ? styles.calendarIconDark : ""}`} />
              <h3 className={isDarkMode ? styles.monitoriaTitleDark : styles.monitoriaTitle}>Próximas Monitorias</h3>
            </div>

            <div className={styles.monitoriasList}>
              {upcomingMonitorias.map((monitoria) => (
                <div
                  key={monitoria.id}
                  className={`${styles.monitoriaItem} ${isDarkMode ? styles.monitoriaItemDark : ""}`}
                >
                  <div className={styles.monitoriaRow}>
                    <div className={styles.monitoriaInfo}>
                      <Clock className={`${styles.clockIcon} ${isDarkMode ? styles.clockIconDark : ""}`} />
                      <span className={isDarkMode ? styles.monitoriaSubjectDark : styles.monitoriaSubject}>
                        {monitoria.subject}
                      </span>
                    </div>
                    <button className={styles.confirmButton}>Confirmar</button>
                  </div>
                  <p className={`${styles.monitoriaDetails} ${isDarkMode ? styles.monitoriaDetailsDark : ""}`}>
                    {monitoria.time} • {monitoria.monitor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.statsCard} ${isDarkMode ? styles.cardDark : ""}`}>
          <div className={styles.statsHeader}>
            <div className={styles.statsIconWrapper}>
              <TrendingUp className={styles.statsIcon} />
            </div>
            <h3 className={isDarkMode ? styles.statsTitleDark : styles.statsTitle}>Estatísticas</h3>
          </div>

          <div className={styles.statsList}>
            <div className={styles.statItem}>
              <div className={styles.statRow}>
                <span className={isDarkMode ? styles.statLabelDark : styles.statLabel}>Frequência</span>
                <span className={styles.statValue}>85%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: "85%" }} />
              </div>
            </div>

            <div className={styles.statItem}>
              <div className={styles.statRow}>
                <span className={isDarkMode ? styles.statLabelDark : styles.statLabel}>Engajamento</span>
                <span className={styles.statValueOrange}>92%</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFillOrange} style={{ width: "92%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} isDarkMode={isDarkMode} />
    </>
  )
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
