import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Otger: Neix una nació</title>
        <meta name="description" content="Joc Otger: Neix una nació." />
        <link rel="icon" href="/favicon.ico" />               
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          OTGER
        </h1>
        <h2 className={styles.title2}>
          senyors de la frontera
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
