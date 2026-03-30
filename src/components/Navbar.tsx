import styles from './Navbar.module.css'

const NAV_LINKS = ['Recursos', 'Preços', 'Empresa', 'Blog']

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="url(#grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#7C3AED"/>
                  <stop offset="100%" stopColor="#06B6D4"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className={styles.logoText}>Fynlo</span>
        </a>

        {/* Links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a href="#" className={styles.link}>{link}</a>
            </li>
          ))}
        </ul>

        {/* CTA Group */}
        <div className={styles.ctaGroup}>
          <a href="#" className={styles.btnGhost}>Entrar</a>
          <a href="#" className={styles.btnPrimary}>Começar grátis</a>
        </div>
      </nav>
    </header>
  )
}
