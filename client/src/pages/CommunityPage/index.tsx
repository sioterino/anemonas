"use client"

import { useState } from "react"
import { Users, BookOpen, MessageSquare, TrendingUp } from "lucide-react"
import { StatsCard } from "../../components/StatsCard"
import { MonitorCard } from "../../components/MonitorCard"
import { MessageModal } from "../../components/MessageModal"
import styles from "./styles.module.css"

interface Monitor {
  id: string
  name: string
  subject: string
  description: string
  rating: number
  studentsHelped: number
  availability: string
  avatar: string
}

const mockMonitors: Monitor[] = [
  {
    id: "1",
    name: "Ana Costa",
    subject: "Matemática",
    description: "Aluna de ADS com paixão por ensinar. Especializada em cálculo e álgebra linear.",
    rating: 4.8,
    studentsHelped: 24,
    availability: "Disponível seg-sex",
    avatar: "AC",
  },
  {
    id: "2",
    name: "Pedro Silva",
    subject: "Programação",
    description: "Desenvolvedor experiente. Ajudo com Java, Python e desenvolvimento web.",
    rating: 4.9,
    studentsHelped: 32,
    availability: "Disponível ter-sáb",
    avatar: "PS",
  },
  {
    id: "3",
    name: "Maria Santos",
    subject: "Física",
    description: "Graduanda em Física. Especializada em mecânica clássica e termodinâmica.",
    rating: 4.7,
    studentsHelped: 18,
    availability: "Disponível seg-qui",
    avatar: "MS",
  },
  {
    id: "4",
    name: "Carlos Oliveira",
    subject: "Banco de Dados",
    description: "DBA profissional. Experiência com SQL, MongoDB e otimização de queries.",
    rating: 4.9,
    studentsHelped: 28,
    availability: "Disponível qua-sex",
    avatar: "CO",
  },
  {
    id: "5",
    name: "Julia Ferreira",
    subject: "Inglês",
    description: "Professora de inglês certificada. Foco em conversação e gramática.",
    rating: 5.0,
    studentsHelped: 45,
    availability: "Disponível todos os dias",
    avatar: "JF",
  },
  {
    id: "6",
    name: "Roberto Lima",
    subject: "Estatística",
    description: "Mestre em Estatística. Ajudo com probabilidade e análise de dados.",
    rating: 4.6,
    studentsHelped: 21,
    availability: "Disponível seg-qua",
    avatar: "RL",
  },
]

interface CommunityPageProps {
  isDarkMode: boolean
}

export function CommunityPage({ isDarkMode }: CommunityPageProps) {
  const [selectedMonitor, setSelectedMonitor] = useState<Monitor | null>(null)
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false)

  const handleSendMessage = (monitorId: string) => {
    const monitor = mockMonitors.find((m) => m.id === monitorId)
    if (monitor) {
      setSelectedMonitor(monitor)
      setIsMessageModalOpen(true)
    }
  }

  return (
    <>
      <div className={styles.header}>
        <h1 className={isDarkMode ? styles.titleDark : styles.title}>Comunidade Anêmonas</h1>
        <p className={isDarkMode ? styles.descriptionDark : styles.description}>
          Conheça os monitores e alunos da plataforma
        </p>
      </div>

      <div className={styles.statsGrid}>
        <StatsCard
          title="Membros Ativos"
          value="324"
          icon={<Users className={styles.icon} />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          isDarkMode={isDarkMode}
        />
        <StatsCard
          title="Monitorias Realizadas"
          value="1.2K"
          icon={<BookOpen className={styles.icon} />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          isDarkMode={isDarkMode}
        />
        <StatsCard
          title="Discussões"
          value="456"
          icon={<MessageSquare className={styles.icon} />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          isDarkMode={isDarkMode}
        />
        <StatsCard
          title="Taxa de Satisfação"
          value="4.8★"
          icon={<TrendingUp className={styles.icon} />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          isDarkMode={isDarkMode}
        />
      </div>

      <div className={styles.monitorsGrid}>
        {mockMonitors.map((monitor) => (
          <MonitorCard
            key={monitor.id}
            monitor={monitor}
            isDarkMode={isDarkMode}
            onSendMessage={() => handleSendMessage(monitor.id)}
          />
        ))}
      </div>

      <MessageModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        monitor={selectedMonitor}
        isDarkMode={isDarkMode}
      />
    </>
  )
}
