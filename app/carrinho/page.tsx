'use client'

import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import produtos from '@/lib/produtos'

export default function CarrinhoPage() {
  const [carrinho, setCarrinho] = useState<number[]>([])
  const [carregou, setCarregou] = useState(false)

  if (!carregou && typeof window !== 'undefined') {
    const salvos = JSON.parse(localStorage.getItem('carrinho') || '[]')
    setCarrinho(salvos)
    setCarregou(true)
  }

  const remover = (id: number) => {
    const novos = carrinho.filter((i) => i !== id)
    localStorage.setItem('carrinho', JSON.stringify(novos))
    setCarrinho(novos)
  }

  const produtosCarrinho = produtos.filter((p) => carrinho.includes(p.id))
  const total = produtosCarrinho.reduce((acc, p) => acc + p.preco, 0)

  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Carrinho</h1>
      {produtosCarrinho.length === 0 ? (
        <div>
          <p className={styles.texto}>Seu carrinho está vazio.</p>
          <Link href="/produtos" className={styles.btn}>Ver Produtos</Link>
        </div>
      ) : (
        <>
          <div className={styles.lista}>
            {produtosCarrinho.map((p) => (
              <div key={p.id} className={styles.item}>
                <span className={styles.imagem}>{p.imagem}</span>
                <span className={styles.nome}>{p.nome}</span>
                <span className={styles.preco}>R$ {p.preco.toFixed(2)}</span>
                <button className={styles.remover} onClick={() => remover(p.id)}>
                  ❌ Remover
                </button>
              </div>
            ))}
          </div>
          <div className={styles.total}>
            <strong>Total: R$ {total.toFixed(2)}</strong>
          </div>
          <Link href="/produtos" className={styles.btn}>
            Continuar Comprando
          </Link>
        </>
      )}
    </div>
  )
}