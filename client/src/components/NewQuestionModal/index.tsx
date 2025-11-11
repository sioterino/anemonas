"use client"

import type React from "react"

import { X } from "lucide-react"
import { useState, useEffect } from "react"
import styles from "./styles.module.css"

interface NewQuestionModalProps {
  isOpen: boolean
  onClose: () => void
  isDarkMode: boolean
}

export function NewQuestionModal({ isOpen, onClose, isDarkMode }: NewQuestionModalProps) {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [subject, setSubject] = useState("")

  const subjects = [
    "Matemática",
    "Programação",
    "Física",
    "Química",
    "Banco de Dados",
    "Inglês",
    "Estatística",
    "Outros",
  ]

  useEffect(() => {
    if (!isOpen) {
      setTitle("")
      setContent("")
      setSubject("")
    }
  }, [isOpen])

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
    console.log("Nova dúvida:", { title, content, subject })
    alert("Dúvida publicada com sucesso!")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={`${styles.modal} ${isDarkMode ? styles.dark : ""}`}>
        <div className={styles.header}>
          <h3 className={isDarkMode ? styles.titleDark : styles.title}>Nova Dúvida</h3>
          <button onClick={onClose} className={styles.closeButton}>
            <X className={styles.closeIcon} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={`${styles.label} ${isDarkMode ? styles.labelDark : ""}`}>
              Disciplina
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className={`${styles.select} ${isDarkMode ? styles.selectDark : ""}`}
            >
              <option value="">Selecione uma disciplina</option>
              {subjects.map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="title" className={`${styles.label} ${isDarkMode ? styles.labelDark : ""}`}>
              Título da Dúvida
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Como calcular derivadas parciais?"
              required
              className={`${styles.input} ${isDarkMode ? styles.inputDark : ""}`}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="content" className={`${styles.label} ${isDarkMode ? styles.labelDark : ""}`}>
              Descreva sua Dúvida
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Descreva sua dúvida com o máximo de detalhes possível..."
              required
              rows={8}
              className={`${styles.textarea} ${isDarkMode ? styles.textareaDark : ""}`}
            />
          </div>

          <div className={`${styles.tip} ${isDarkMode ? styles.tipDark : ""}`}>
            <p className={isDarkMode ? styles.tipTextDark : styles.tipText}>
              💡 Dica: Seja específico em sua pergunta e inclua exemplos quando possível. Isso ajudará a comunidade a
              entender melhor sua dúvida!
            </p>
          </div>

          <div className={styles.buttonGroup}>
            <button type="button" onClick={onClose} className={`${styles.button} ${styles.cancelButton}`}>
              Cancelar
            </button>
            <button type="submit" className={`${styles.button} ${styles.submitButton}`}>
              Publicar Dúvida
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
