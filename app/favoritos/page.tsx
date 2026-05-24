import styles from './page.module.css'
import Link from 'next/link'

export default function FavoritosPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Favoritos</h1>
      <p className={styles.texto}>
        Clique em ❤️ Favoritar nos produtos para salvá-los aqui.
      </p>
      <Link href="/produtos" className={styles.btn}>
        Ver Produtos
      </Link>
    </div>
  )
}