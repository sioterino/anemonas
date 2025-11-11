"use client"

import type React from "react"
import { X } from "lucide-react"
import { useState } from "react"
import styles from "./styles.module.css"

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  isDarkMode: boolean
}

export function EditProfileModal({ isOpen, onClose, isDarkMode }: EditProfileModalProps) {
  const [formData, setFormData] = useState({
    name: "João Silva",
    email: "joao@ifsc.edu.br",
    phone: "(48) 9999-9999",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Saving profile:", formData)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={`${styles.modal} ${isDarkMode ? styles.dark : ""}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Editar Perfil</h2>
          <button onClick={onClose} className={styles.closeButton}>
            <X className={styles.closeIcon} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`${styles.input} ${isDarkMode ? styles.dark : ""}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${isDarkMode ? styles.dark : ""}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`${styles.input} ${isDarkMode ? styles.dark : ""}`}
            />
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" onClick={onClose} className={`${styles.button} ${styles.cancelButton}`}>
              Cancelar
            </button>
            <button type="submit" className={`${styles.button} ${styles.saveButton}`}>
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
