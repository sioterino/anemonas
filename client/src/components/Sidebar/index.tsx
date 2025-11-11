"use client"

import type React from "react"

import { User, Calendar, MessageCircle, Users, LogOut, ChevronDown, MessageSquare } from "lucide-react"
import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import type { User as UserType } from "../../App"
import styles from "./styles.module.css"

interface SidebarProps {
  isDarkMode: boolean
  user: UserType
  onLogout: () => void
}

interface MenuItem {
  id: string
  path: string
  label: string
  icon: React.ElementType
}

export function Sidebar({ isDarkMode, user, onLogout }: SidebarProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const menuItems: MenuItem[] = [
    { id: "profile", path: "/profile", label: "Perfil", icon: User },
    { id: "agenda", path: "/agenda", label: "Agenda", icon: Calendar },
    { id: "forum", path: "/forum", label: "Fórum", icon: MessageCircle },
    { id: "community", path: "/community", label: "Comunidade", icon: Users },
    { id: "chat", path: "/chat", label: "Chat", icon: MessageSquare },
  ]

  const handleNavigation = (path: string) => {
    navigate(path)
    setIsMobileMenuOpen(false)
  }

  const handleLogout = () => {
    onLogout()
    setShowUserMenu(false)
    setIsMobileMenuOpen(false)
    navigate("/")
  }

  return (
    <>
      <button
        className={`${styles.mobileToggle} ${isDarkMode ? styles.dark : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Users className={styles.mobileIcon} />
      </button>

      {isMobileMenuOpen && <div className={styles.overlay} onClick={() => setIsMobileMenuOpen(false)} />}

      <aside className={`${styles.sidebar} ${isDarkMode ? styles.dark : ""} ${isMobileMenuOpen ? styles.open : ""}`}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <span className={styles.logoText}>A</span>
          </div>
          <span className={styles.logoTitle}>Anêmonas</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.menuList}>
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
                  >
                    <Icon className={styles.menuIcon} />
                    <span>{item.label}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className={styles.userSection}>
          <div className={styles.userDropdown}>
            <button onClick={() => setShowUserMenu(!showUserMenu)} className={styles.userButton}>
              <div className={styles.userAvatar}>
                <span className={styles.userAvatarText}>{user.avatar}</span>
              </div>
              <div className={styles.userInfo}>
                <p className={styles.userName}>{user.name}</p>
                <p className={styles.userRole}>Aluno</p>
              </div>
              <ChevronDown className={`${styles.chevron} ${showUserMenu ? styles.chevronOpen : ""}`} />
            </button>

            {showUserMenu && (
              <div className={styles.userMenu}>
                <button onClick={handleLogout} className={styles.logoutButton}>
                  <LogOut className={styles.logoutIcon} />
                  <span>Sair</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  )
}
