"use client"

import type React from "react"
import { X, Send } from "lucide-react"
import { useState } from "react"
import styles from "./styles.module.css"

interface Monitor {
  id: string
  name: string
  subject: string
  avatar: string
}

interface MessageModalProps {
  isOpen: boolean
  onClose: () => void
  monitor: Monitor | null
  isDarkMode: boolean
}

export function MessageModal({ isOpen, onClose, monitor, isDarkMode }: MessageModalProps) {
  const [message, setMessage] = useState("")

  if (!isOpen || !monitor) return null

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      console.log(`Sending message to ${monitor.name}: ${message}`)
      setMessage("")
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} ${isDarkMode ? styles.dark : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <div className={styles.monitorInfo}>
            <div className={styles.avatar}>
              <span className={styles.avatarText}>{monitor.avatar}</span>
            </div>
            <div>
              <h3 className={styles.monitorName}>{monitor.name}</h3>
              <p className={styles.monitorSubject}>{monitor.subject}</p>
            </div>
          </div>
          <button onClick={onClose} className={styles.closeButton}>
            <X className={styles.closeIcon} />
          </button>
        </div>

        <form onSubmit={handleSendMessage} className={styles.form}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className={`${styles.textarea} ${isDarkMode ? styles.dark : ""}`}
            rows={6}
          />
          <button type="submit" className={styles.sendButton} disabled={!message.trim()}>
            <Send className={styles.sendIcon} />
            <span>Enviar Mensagem</span>
          </button>
        </form>
      </div>
    </div>
  )
}
