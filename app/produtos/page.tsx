'use client'

import { useState } from 'react'
import produtos from '@/lib/produtos'
import Card from '@/components/Card/Card'
import SearchBar from '@/components/SearchBar/SearchBar'
import styles from './page.module.css'

export default function ProdutosPage() {
  const [busca, setBusca] = useState('')

  const filtrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(busca.toLowerCase())
  )

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Produtos</h1>
      <SearchBar valor={busca} onChange={setBusca} />
      <div className={styles.grid}>
        {filtrados.length > 0 ? (
          filtrados.map((p) => (
            <Card key={p.id} id={p.id} nome={p.nome} preco={p.preco} imagem={p.imagem} />
          ))
        ) : (
          <p className={styles.vazio}>Nenhum produto encontrado.</p>
        )}
      </div>
    </div>
  )
}