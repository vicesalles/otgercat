import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/DevLog.module.css'

export default function DevLog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Otger DevLog</title>
        <meta name="description" content="Joc Otger: Neix una nació." />
       </Head>

      <main>
        <Link href="/"><h1 className={styles.title}>
          OTGER DEVLOG
        </h1></Link>

        <p className={styles.devlogp}>
            <b>1 de maig de 2022</b> Creació de la primera presència web. Basat en experiències anteriors, 
            opto per un site <a href="https://nextjs.org/" target="_blank" rel="noreferrer">nextjs</a>
             allotjat a <a href="https://vercel.com/" target="_blank" rel="noreferrer">vercel</a>. 
            En aquests moments, fer push al master de <a href="https://github.com/vicesalles/otgercat" target="_blank" rel="noreferrer">Github</a> i oblidar-se de tot, no té preu.
        </p>
        
               
      </main>
      
    </div>
  )
}
