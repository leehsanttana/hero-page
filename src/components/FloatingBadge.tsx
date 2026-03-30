import styles from './FloatingBadge.module.css'

interface FloatingBadgeProps {
  className?: string
  icon: string
  title: string
  sub: string
  color: 'green' | 'purple' | 'blue'
}

export function FloatingBadge({ className = '', icon, title, sub, color }: FloatingBadgeProps) {
  return (
    <div className={`${styles.badge} ${styles[color]} ${className}`}>
      <span className={styles.icon}>{icon}</span>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.sub}>{sub}</div>
      </div>
    </div>
  )
}
