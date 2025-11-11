"use client"

import type { ReactNode } from "react"
import styles from "./styles.module.css"

interface StatsCardProps {
  title: string
  value: string
  icon: ReactNode
  iconBgColor: string
  iconColor: string
  isDarkMode: boolean
}

export function StatsCard({ title, value, icon, iconBgColor, iconColor, isDarkMode }: StatsCardProps) {
  return (
    <div className={`${styles.card} ${isDarkMode ? styles.dark : ""}`}>
      <div className={styles.content}>
        <div>
          <p className={`${styles.title} ${isDarkMode ? styles.titleDark : ""}`}>{title}</p>
          <p className={`${styles.value} ${isDarkMode ? styles.valueDark : ""}`}>{value}</p>
        </div>
        <div className={`${styles.iconWrapper} ${iconBgColor}`}>
          <div className={iconColor}>{icon}</div>
        </div>
      </div>
    </div>
  )
}
