"use client"

import { useState } from "react"
import { ThumbsUp, MessageCircle, Plus } from "lucide-react"
import { NewQuestionModal } from "../../components/NewQuestionModal"
import styles from "./styles.module.css"

interface Question {
  id: string
  title: string
  content: string
  author: string
  subject: string
  likes: number
  answers: number
  timestamp: string
  avatar: string
}

const mockQuestions: Question[] = [
  {
    id: "1",
    title: "Como resolver integrais por substituição?",
    content:
      "Estou com dificuldades para entender quando aplicar o método de substituição em integrais. Alguém pode explicar?",
    author: "João Silva",
    subject: "Matemática",
    likes: 12,
    answers: 5,
    timestamp: "2 horas atrás",
    avatar: "JS",
  },
  {
    id: "2",
    title: "Diferença entre SQL e NoSQL?",
    content: "Quais são as principais diferenças entre bancos de dados SQL e NoSQL? Quando usar cada um?",
    author: "Maria Santos",
    subject: "Banco de Dados",
    likes: 8,
    answers: 3,
    timestamp: "5 horas atrás",
    avatar: "MS",
  },
  {
    id: "3",
    title: "React Hooks - useEffect dependências",
    content:
      "Como funciona exatamente o array de dependências do useEffect? Estou tendo problemas com loops infinitos.",
    author: "Pedro Costa",
    subject: "Programação",
    likes: 15,
    answers: 7,
    timestamp: "1 dia atrás",
    avatar: "PC",
  },
  {
    id: "4",
    title: "Vetores em Física - direção e sentido",
    content: "Alguém pode explicar a diferença entre direção e sentido quando falamos de vetores?",
    author: "Ana Lima",
    subject: "Física",
    likes: 6,
    answers: 2,
    timestamp: "1 dia atrás",
    avatar: "AL",
  },
]

interface ForumPageProps {
  isDarkMode: boolean
}

export function ForumPage({ isDarkMode }: ForumPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState("Todas")

  const subjects = ["Todas", "Matemática", "Programação", "Física", "Banco de Dados", "Inglês", "Estatística"]

  const filteredQuestions =
    selectedSubject === "Todas" ? mockQuestions : mockQuestions.filter((q) => q.subject === selectedSubject)

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className={isDarkMode ? styles.titleDark : styles.title}>Fórum de Discussões</h1>
          <p className={isDarkMode ? styles.descriptionDark : styles.description}>
            Tire dúvidas e ajude outros estudantes
          </p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className={styles.newButton}>
          <Plus className={styles.buttonIcon} />
          Nova Dúvida
        </button>
      </div>

      <div className={styles.filters}>
        {subjects.map((subject) => (
          <button
            key={subject}
            onClick={() => setSelectedSubject(subject)}
            className={`${styles.filterButton} ${
              selectedSubject === subject ? styles.filterButtonActive : ""
            } ${isDarkMode ? styles.filterButtonDark : ""}`}
          >
            {subject}
          </button>
        ))}
      </div>

      <div className={styles.questionsList}>
        {filteredQuestions.map((question) => (
          <div key={question.id} className={`${styles.questionCard} ${isDarkMode ? styles.questionCardDark : ""}`}>
            <div className={styles.questionHeader}>
              <div className={styles.authorInfo}>
                <div className={styles.avatar}>
                  <span className={styles.avatarText}>{question.avatar}</span>
                </div>
                <div>
                  <p className={isDarkMode ? styles.authorNameDark : styles.authorName}>{question.author}</p>
                  <p className={isDarkMode ? styles.timestampDark : styles.timestamp}>{question.timestamp}</p>
                </div>
              </div>
              <span className={styles.subjectBadge}>{question.subject}</span>
            </div>

            <h3 className={isDarkMode ? styles.questionTitleDark : styles.questionTitle}>{question.title}</h3>
            <p className={isDarkMode ? styles.questionContentDark : styles.questionContent}>{question.content}</p>

            <div className={styles.questionFooter}>
              <button className={`${styles.actionButton} ${isDarkMode ? styles.actionButtonDark : ""}`}>
                <ThumbsUp className={styles.actionIcon} />
                <span>{question.likes}</span>
              </button>
              <button className={`${styles.actionButton} ${isDarkMode ? styles.actionButtonDark : ""}`}>
                <MessageCircle className={styles.actionIcon} />
                <span>{question.answers} respostas</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <NewQuestionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} isDarkMode={isDarkMode} />
    </>
  )
}
