import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senyors de la frontera</title>
        <meta name="description" content="Senyors de la frontera: Un joc de l'alta edat mitjana" />
        <link rel="icon" href="/favicon.ico" />               
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        senyors de la frontera
        </h1>
        <h2 className={styles.title2}>
          Un joc de l'alta edat mitjana
        </h2>
               
      </main>

      <footer className={styles.footer}>
       
          <span className={styles.logo}>
            <Link href="/devlog">visita el devlog</Link>            
          </span>
       
      </footer>
    </div>
  )
}
