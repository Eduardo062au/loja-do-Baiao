import Link from 'next/link'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bem-vindo à Loja do Baião</h1>
      <p className={styles.subtitle}>Encontre os melhores produtos com praticidade.</p>
      <Link href="/produtos" className={styles.btn}>
        Ver Produtos
      </Link>
    </div>
  )
}