"use client"

import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

export function LandingPage() {
  const navigate = useNavigate()

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
          <h2 className={styles.heading}>Bem-vindo ao Anêmonas</h2>
          <p className={styles.description}>Conecte-se com monitores, agende sessões e impulsione seu aprendizado</p>

          <div className={styles.buttonGroup}>
            <button onClick={() => navigate("/login")} className={styles.loginButton}>
              Fazer Login
            </button>
            <button onClick={() => navigate("/register")} className={styles.registerButton}>
              Criar Conta
            </button>
          </div>
        </div>

        <p className={styles.footer}>© 2025 Anêmonas - IFSC Campus Florianópolis</p>
      </div>
    </div>
  )
}
