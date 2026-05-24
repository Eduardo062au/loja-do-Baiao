import produtos from '@/lib/produtos'
import styles from './page.module.css'
import Link from 'next/link'

export default async function DetalheProduto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const produto = produtos.find((p) => p.id === Number(id))

  if (!produto) {
    return (
      <div className={styles.container}>
        <p>Produto não encontrado.</p>
        <Link href="/produtos">Voltar</Link>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imagem}>{produto.imagem}</div>
        <h1 className={styles.nome}>{produto.nome}</h1>
        <p className={styles.categoria}>Categoria: {produto.categoria}</p>
        <p className={styles.preco}>R$ {produto.preco.toFixed(2)}</p>
        <Link href="/produtos" className={styles.btn}>
          ← Voltar para produtos
        </Link>
      </div>
    </div>
  )
}