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

export default function Card({ id, nome, preco, imagem }: Props) {
  const [curtido, setCurtido] = useState(false)

  const toggleFavorito = () => {
    try {
      const salvos: number[] = JSON.parse(localStorage.getItem('favoritos') || '[]')
      const novos = salvos.includes(id)
        ? salvos.filter((i) => i !== id)
        : [...salvos, id]
      localStorage.setItem('favoritos', JSON.stringify(novos))
      setCurtido(!curtido)
      console.log('Favoritos salvos:', novos)
    } catch (e) {
      console.error('Erro ao salvar favorito:', e)
    }
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