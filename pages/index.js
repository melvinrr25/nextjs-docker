import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ name }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        
        <strong>Username:</strong> { name }
      </div>
    </div>
  )
}

export function getServerSideProps() {
  return { 
    props: { name: process.env.USERNAME } 
  }
}
