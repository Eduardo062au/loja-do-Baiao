'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Card.module.css'

interface Props {
  id: number
  nome: string
  preco: number
  imagem: string
}

function getFavoritos(): number[] {
  if (typeof window === 'undefined') return []
  return JSON.parse(localStorage.getItem('favoritos') || '[]')
}

export default function Card({ id, nome, preco, imagem }: Props) {
  const [curtido, setCurtido] = useState(() => getFavoritos().includes(id))

  const toggleFavorito = () => {
    const salvos = getFavoritos()
    const novos = salvos.includes(id)
      ? salvos.filter((i) => i !== id)
      : [...salvos, id]
    localStorage.setItem('favoritos', JSON.stringify(novos))
    setCurtido(!curtido)
  }

  return (
    <div className={styles.card}>
      <div className={styles.imagem}>{imagem}</div>
      <h2 className={styles.nome}>{nome}</h2>
      <p className={styles.preco}>R$ {preco.toFixed(2)}</p>
      <button
        className={`${styles.curtir} ${curtido ? styles.curtido : ''}`}
        onClick={toggleFavorito}
      >
        {curtido ? '❤️ Favoritado' : '🤍 Favoritar'}
      </button>
      <Link href={`/produtos/${id}`} className={styles.btn}>
        Ver detalhes
      </Link>
    </div>
  )
}