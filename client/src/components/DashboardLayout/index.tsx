import { Outlet } from "react-router-dom"
import { Sidebar } from "../Sidebar"
import { Header } from "../Header"
import type { User } from "../../App"
import styles from "./styles.module.css"

interface DashboardLayoutProps {
  isDarkMode: boolean
  onToggleTheme: () => void
  user: User
  onLogout: () => void
}

export function DashboardLayout({ isDarkMode, onToggleTheme, user, onLogout }: DashboardLayoutProps) {
  return (
    <div className={`${styles.container} ${isDarkMode ? styles.dark : ""}`}>
      <Sidebar isDarkMode={isDarkMode} user={user} onLogout={onLogout} />

      <div className={styles.mainContent}>
        <Header isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />

        <main className={styles.pageContent}>
          <div className={styles.pageContainer}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
