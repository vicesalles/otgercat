import Head from 'next/head'
import styles from '../styles/DevLog.module.css'

export default function DevLog() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Otger: Neix una nació</title>
        <meta name="description" content="Joc Otger: Neix una nació." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <h1 className={styles.title}>
          OTGER DEVLOG
        </h1>

        <p className={styles.devlogp}>
            <b>1 de maig de 2022</b> Creació de la primera presència web. Basat en experiències anteriors, opto per un site nextjs allotjat a <a href="https://vercel.com/" target="_blank">vercel</a>. 
            En aquests moments, fer push al master de Github i oblidar-se de tot, no té preu.
        </p>
        
               
      </main>
      
    </div>
  )
}
