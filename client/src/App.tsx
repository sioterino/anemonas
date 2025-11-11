import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { LandingPage } from "./pages/LandingPage"
import { DashboardLayout } from "./components/DashboardLayout"
import { ProfilePage } from "./pages/ProfilePage"
import { CommunityPage } from "./pages/CommunityPage"
import { AgendaPage } from "./pages/AgendaPage"
import { ForumPage } from "./pages/ForumPage"
import { ChatPage } from "./pages/ChatPage"

export interface User {
  name: string
  email: string
  avatar: string
}

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = (name: string, email: string) => {
    const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)

    setUser({ name, email, avatar: initials })
  }

  const handleLogout = () => { setUser(null) }

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={!user ? <LandingPage /> : <Navigate to="/community" replace />} />
        <Route
          path="/login"
          element={!user ? <LoginPage onLogin={handleLogin} /> : <Navigate to="/community" replace />}
        />
        <Route
          path="/register"
          element={!user ? <RegisterPage onLogin={handleLogin} /> : <Navigate to="/community" replace />}
        />

        {/* Protected routes with dashboard layout */}
        {user ? (
          <Route
            element={
              <DashboardLayout
                isDarkMode={isDarkMode}
                onToggleTheme={() => setIsDarkMode(!isDarkMode)}
                user={user}
                onLogout={handleLogout}
              />
            }
          >
            <Route path="/community" element={<CommunityPage isDarkMode={isDarkMode} />} />
            <Route path="/profile" element={<ProfilePage isDarkMode={isDarkMode} />} />
            <Route path="/agenda" element={<AgendaPage isDarkMode={isDarkMode} />} />
            <Route path="/forum" element={<ForumPage isDarkMode={isDarkMode} />} />
            <Route path="/chat" element={<ChatPage isDarkMode={isDarkMode} />} />
            <Route path="*" element={<Navigate to="/community" replace />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  )
}
