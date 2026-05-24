'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import produtos from '@/lib/produtos'
import Card from '@/components/Card/Card'

function getFavoritos(): number[] {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('favoritos') || '[]')
}

export default function FavoritosPage() {
  const [favoritos] = useState<number[]>(() => getFavoritos())

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
            <Card key={p.id} id={p.id} nome={p.nome} preco={p.preco} imagem={p.imagem} />
          ))}
        </div>
      )}
    </div>
  )
}