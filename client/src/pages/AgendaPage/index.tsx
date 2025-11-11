import { useState } from "react"
import { Toaster } from "sonner";


import { ScheduleModal } from "../../components/AgendaComponents/ScheduleModal"

import styles from "./styles.module.css"
import { getMonthInfo } from "../../utils/Calendar";
import { CalendarField } from "../../components/AgendaComponents/CalendarField";
import { MonitorsField } from "../../components/AgendaComponents/MonitorsField";

interface Monitor {
  id: string
  name: string
  subject: string
  rating: number
  studentsHelped: number
  avatar: string
}

export type { Monitor }

const mockMonitors: Monitor[] = [
  { id: "1", name: "Ana Costa", subject: "Matemática", rating: 4.8, studentsHelped: 24, avatar: "AC", },
  { id: "2", name: "Pedro Silva", subject: "Programação", rating: 4.9, studentsHelped: 32, avatar: "PS", },
  { id: "3", name: "Maria Santos", subject: "Física", rating: 4.7, studentsHelped: 18, avatar: "MS", },
]

interface AgendaPageProps { isDarkMode: boolean }

export function AgendaPage({ isDarkMode }: AgendaPageProps) {

  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedMonitor, setSelectedMonitor] = useState<Monitor | null>(null)
  const [monthInfo, setMonthInfo] = useState(getMonthInfo(0))

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSchedule = (monitor: Monitor) => {
    setSelectedMonitor(monitor)
    setIsModalOpen(true)
  }

  return (
    <>
      <Toaster richColors position="top-right" theme={isDarkMode ? 'dark' : 'light'} />
      
      <div className={styles.header}>
        <h1 className={isDarkMode ? styles.titleDark : styles.title}>Agenda de Monitorias</h1>
        <p className={isDarkMode ? styles.descriptionDark : styles.description}>Agende suas sessões de monitoria</p>
      </div>

      <div className={styles.container}>

        {/* CALENDAR */}
        <CalendarField
          isDarkMode={isDarkMode}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          monthInfo={monthInfo}
          setMonthInfo={setMonthInfo}
        />

        {/* MONITORS */}
        <MonitorsField 
          isDarkMode={isDarkMode}
          monitors={mockMonitors}
          selectedDate={selectedDate}
          monthInfo={monthInfo}
          handleSchedule={handleSchedule}
        />
        
      </div>

      <ScheduleModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        monitor={selectedMonitor}
        selectedDate={selectedDate}
        monthInfo={monthInfo}
        isDarkMode={isDarkMode}
      />
    </>
  )
}