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
            En aquests moments, fer push al master de <a href="https://github.com/vicesalles/otgercat" target="_blank" rel="noreferrer">Github</a> i oblidar-se de tot, no té preu. Decideixo crear aquest devlog amb mi mateix com a únic públic objectiu en ment.
            Em va bé deixar-me les intencions per escrit. Passar idees a text serveix per definir-les; enforcar-ne els cantos.
        </p>

        <p className={styles.devlogp}>
        <b>14 de maig de 2022</b> La llavor d'aquest projecte és literària. L'univers d'aquest joc es basa en antic projecte narratiu anomenat <a href="https://terraisang.blogspot.com/p/terra-i-sang-i-v.html" target="_blank" rel="noreferrer">Terra i Sang</a>. 
        Aquestes darreres setmanes he estat fent gargots i pensant com donar-li forma. M'imagino clarament com vull que sigui el joc però també sóc conscient de la seva complexitat. Dono per fet que aquest serà un projecte <i>solo</i> i, per tant, quantificar
        recursos i metes intermitges és clau per sortir al mercat. He pres la decisió de trencar la idea general en productes separats que, en un futur ideal, podrien retrobar-se per crear el joc somiat. El primer d'aquests productes serà un joc a mig camí 
        d'un <i>idle</i> i un joc de torres. Aquesta és la mínima expressió de la vessant de gestió del joc amb el que somio.
        </p>        
               
      </main>
      
    </div>
  )
}
