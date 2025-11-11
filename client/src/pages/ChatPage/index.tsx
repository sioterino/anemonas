import styles from "./styles.module.css"

interface ChatPageProps {
  isDarkMode: boolean
}

export function ChatPage({ isDarkMode }: ChatPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={isDarkMode ? styles.titleDark : styles.title}>Chat</h1>
        <p className={isDarkMode ? styles.descriptionDark : styles.description}>
          Converse com monitores e alunos em tempo real
        </p>
      </div>

      <div className={`${styles.card} ${isDarkMode ? styles.cardDark : ""}`}>
        <div className={styles.comingSoon}>
          <p className={isDarkMode ? styles.comingSoonTextDark : styles.comingSoonText}>
            Funcionalidade de chat em desenvolvimento
          </p>
          <p className={isDarkMode ? styles.subtextDark : styles.subtext}>
            Em breve você poderá conversar em tempo real com monitores e participar de grupos de estudo
          </p>
        </div>
      </div>
    </div>
  )
}
