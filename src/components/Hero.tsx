import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'
import appMockup from '../assets/app-mockup.png'
import { StatCard } from './StatCard'
import { FloatingBadge } from './FloatingBadge'

const STATS = [
  { label: 'Usuários ativos', value: '2.4M+', icon: '👥' },
  { label: 'Transações/dia', value: '18M', icon: '⚡' },
  { label: 'Economizado', value: 'R$3.8B', icon: '💰' },
]

const TRUST_LOGOS = ['Itaú', 'Nubank', 'XP', 'BTG', 'Inter']

export function Hero() {
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  // Parallax on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${dx * -18}px, ${dy * -12}px)`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${dx * 12}px, ${dy * 18}px)`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className={styles.section}>
      {/* Ambient Orbs */}
      <div className={styles.orb1} ref={orb1Ref} />
      <div className={styles.orb2} ref={orb2Ref} />

      {/* Grid noise overlay */}
      <div className={styles.gridOverlay} />

      <div className={styles.container}>
        {/* ─── LEFT COLUMN ─────────────────── */}
        <div className={styles.left}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Novo — Relatórios com IA chegando em Abril</span>
          </div>

          {/* Headline */}
          <h1 className={styles.headline}>
            O dinheiro sob
            <br />
            <span className={styles.headlineGradient}>seu controle,</span>
            <br />
            finalmente.
          </h1>

          {/* Sub */}
          <p className={styles.sub}>
            Fynlo conecta todas as suas contas, analisa seus gastos com inteligência
            artificial e te ajuda a alcançar seus objetivos financeiros com clareza
            e sem esforço.
          </p>
          <p className={styles.sub}>
            Além disso, brasileiros ganham um desconto de 50% na assinatura anual.
            Venha faazer parte do time!!!!
          </p>

          {/* CTA Row */}
          <div className={styles.ctaRow}>
            <a href="#" className={styles.btnPrimary} id="hero-cta-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  fill="rgba(255,255,255,0.2)" stroke="white" strokeWidth="1.5" />
                <path d="M10 8l6 4-6 4V8z" fill="white" />
              </svg>
              Começar agora — grátis
            </a>
            <a href="#" className={styles.btnOutline} id="hero-cta-demo">
              Ver demonstração
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Trust bar */}
          <div className={styles.trustBar}>
            <span className={styles.trustLabel}>Integrado com</span>
            <div className={styles.trustLogos}>
              {TRUST_LOGOS.map(name => (
                <span key={name} className={styles.trustLogo}>{name}</span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {STATS.map(s => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>
        </div>

        {/* ─── RIGHT COLUMN ─────────────────── */}
        <div className={styles.right}>
          <div className={styles.phoneWrapper}>
            {/* Glow rings */}
            <div className={styles.glowRing1} />
            <div className={styles.glowRing2} />

            {/* Phone mockup */}
            <div className={styles.phone}>
              <img
                src={appMockup}
                alt="Fynlo app dashboard screenshot"
                className={styles.mockupImg}
              />
            </div>

            {/* Floating badges */}
            <FloatingBadge
              className={styles.badge1}
              icon="📈"
              title="+24.8%"
              sub="Patrimônio este mês"
              color="green"
            />
            <FloatingBadge
              className={styles.badge2}
              icon="🤖"
              title="IA Ativa"
              sub="Analisando seus gastos"
              color="purple"
            />
            <FloatingBadge
              className={styles.badge3}
              icon="🔒"
              title="100% Seguro"
              sub="Criptografia bancária"
              color="blue"
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
      </div>
    </section>
  )
}
