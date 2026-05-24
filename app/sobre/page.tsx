import styles from './page.module.css'

export default function SobrePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.titulo}>Sobre</h1>

      <div className={styles.secao}>
        <h2>O Projeto</h2>
        <p>
          A Loja do Baião é um projeto acadêmico desenvolvido para a disciplina
          de Programação Web I do curso de Engenharia de Software do Centro
          Universitário Alfredo Nasser.
        </p>
      </div>

      <div className={styles.secao}>
        <h2>Tecnologias Utilizadas</h2>
        <ul>
          <li>Next.js 15</li>
          <li>React 19</li>
          <li>CSS Modules</li>
          <li>TypeScript</li>
        </ul>
      </div>

      <div className={styles.secao}>
        <h2>Desenvolvedor</h2>
        <p>Projeto desenvolvido por Eduardo — Turma ESN-5.</p>
      </div>
    </div>
  )
}