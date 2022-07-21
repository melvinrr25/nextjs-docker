import Head from 'next/head'
import Script from "next/script";
//import styles from '../styles/Home.module.css'

export default function Home({ name }) {

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
        <Script id="bootstrap-cdn" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />

      </Head>
      <main>
        Main {name}
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export function getServerSideProps() {
  return { 
    props: { name: process.env.USERNAME } 
  }
}
