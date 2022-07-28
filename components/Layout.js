import Head from 'next/head'
import Nav from '../components/Nav'

export default function Layout({ children }) {
  return <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="md:flex">
      <Nav />
      <div className="md:flex-1">
        <div className="bg-[color:#f7f7f7] p-4 md:p-8 min-h-screen">
          { children }
          <footer>Footer</footer>
        </div>
      </div>
    </div>
  </>
}
