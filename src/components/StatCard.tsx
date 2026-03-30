import styles from './StatCard.module.css'

interface StatCardProps {
  label: string
  value: string
  icon: string
}

export function StatCard({ label, value, icon }: StatCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <div>
        <div className={styles.value}>{value}</div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  )
}
