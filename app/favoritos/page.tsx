'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import produtos from '@/lib/produtos'

function getFavoritos(): number[] {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('favoritos') || '[]')
}

export default function FavoritosPage() {
  const [favoritos, setFavoritos] = useState<number[]>(() => getFavoritos())

  const remover = (id: number) => {
    const novos = favoritos.filter((i) => i !== id)
    localStorage.setItem('favoritos', JSON.stringify(novos))
    setFavoritos(novos)
  }

  const produtosFavoritos = produtos.filter((p) => favoritos.includes(p.id))

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Favoritos</h1>
      {produtosFavoritos.length === 0 ? (
        <div>
          <p className={styles.texto}>Você ainda não favoritou nenhum produto.</p>
          <Link href="/produtos" className={styles.btn}>Ver Produtos</Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {produtosFavoritos.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.imagem}>{p.imagem}</div>
              <h2 className={styles.nome}>{p.nome}</h2>
              <p className={styles.preco}>R$ {p.preco.toFixed(2)}</p>
              <button className={styles.remover} onClick={() => remover(p.id)}>
                ❌ Remover
              </button>
              <Link href={`/produtos/${p.id}`} className={styles.btn}>
                Ver detalhes
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}