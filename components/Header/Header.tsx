import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">🛍️ Loja do Baião</Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Início</Link>
        <Link href="/produtos">Produtos</Link>
        <Link href="/favoritos">Favoritos</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  )
}