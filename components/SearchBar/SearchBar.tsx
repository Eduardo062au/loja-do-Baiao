'use client'

import styles from './SearchBar.module.css'

interface Props {
  valor: string
  onChange: (v: string) => void
}

export default function SearchBar({ valor, onChange }: Props) {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Buscar produto..."
      value={valor}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}