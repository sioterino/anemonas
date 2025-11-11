"use client"

import { Moon, Sun } from "lucide-react"
import styles from "./styles.module.css"

interface HeaderProps {
  isDarkMode: boolean
  onToggleTheme: () => void
}

export function Header({ isDarkMode, onToggleTheme }: HeaderProps) {
  return (
    <header className={`${styles.header} ${isDarkMode ? styles.dark : ""}`}>
      <div className={styles.container}>
        <h2 className={styles.title}>Anêmonas - Sistema de Monitorias</h2>

        <button onClick={onToggleTheme} className={styles.themeButton} aria-label="Alternar tema">
          {isDarkMode ? <Sun className={styles.icon} /> : <Moon className={styles.icon} />}
        </button>
      </div>
    </header>
  )
}
