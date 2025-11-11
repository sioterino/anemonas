"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

interface LoginPageProps {
  onLogin: (name: string, email: string) => void
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin("João Silva", email)
    navigate("/community")
  }

  const handleGoogleLogin = () => {
    const mockGoogleUser = {
      name: "Usuário Google",
      email: "usuario@gmail.com",
    }

    onLogin(mockGoogleUser.name, mockGoogleUser.email)
    navigate("/community")
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logoCard}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <span className={styles.logoText}>A</span>
            </div>
            <h1 className={styles.title}>Anêmonas</h1>
          </div>
          <p className={styles.subtitle}>Sistema de Monitorias</p>
        </div>

        <div className={styles.card}>
          <h2 className={styles.heading}>Bem-vindo de volta</h2>
          <p className={styles.description}>Entre com suas credenciais para continuar</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu.email@ifsc.edu.br"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.rememberRow}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" className={styles.checkbox} />
                <span className={styles.checkboxText}>Lembrar-me</span>
              </label>
              <button type="button" className={styles.forgotButton}>
                Esqueceu a senha?
              </button>
            </div>

            <button type="submit" className={styles.submitButton}>
              Entrar
            </button>
          </form>

          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <span className={styles.dividerText}>Ou continue com</span>
          </div>

          <button type="button" onClick={handleGoogleLogin} className={styles.googleButton}>
            <svg className={styles.googleIcon} viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span>Continuar com Google</span>
          </button>

          <div className={styles.registerPrompt}>
            <button onClick={() => navigate("/register")} className={styles.registerLink}>
              Não tem uma conta? <span className={styles.registerHighlight}>Cadastre-se</span>
            </button>
          </div>
        </div>

        <p className={styles.footer}>© 2025 Anêmonas - IFSC Campus Florianópolis</p>
      </div>
    </div>
  )
}
