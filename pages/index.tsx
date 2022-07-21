import Head from 'next/head'
import Nav from '../components/nav/Nav'

export default function Home({ name }) {

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/purecss@2.1.0/build/grids-responsive-min.css" />
      </Head>
      <div className="app-wrapper">
        <Nav />
        <main className="main-content p-1">
          <form className="pure-form pure-form-stacked">
            <fieldset>
              <legend>Legend</legend>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-first-name">First Name</label>
                  <input type="text" id="multi-first-name" className="pure-u-23-24" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-last-name">Last Name</label>
                  <input type="text" id="multi-last-name" className="pure-u-23-24" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-email">E-Mail</label>
                  <input type="email" id="multi-email" className="pure-u-23-24" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-city">City</label>
                  <input type="text" id="multi-city" className="pure-u-23-24" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-state">State</label>
                  <select id="multi-state" className="pure-input-1-2">
                    <option>AL</option>
                    <option>CA</option>
                    <option>IL</option>
                  </select>
                </div>
              </div>
              <label htmlFor="multi-terms" className="pure-checkbox">
                <input type="checkbox" id="multi-terms" /> I&#x27;ve read the terms and conditions
              </label>
              <button type="submit" className="pure-button pure-button-primary">Submit</button>
            </fieldset>
          </form>
          <form className="pure-form pure-form-stacked">
            <fieldset>
              <legend>Legend</legend>
              <div className="pure-g">
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-first-name">First Name</label>
                  <input type="text" id="multi-first-name" className="pure-u-23-24" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-last-name">Last Name</label>
                  <input type="text" id="multi-last-name" className="pure-u-23-24" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-email">E-Mail</label>
                  <input type="email" id="multi-email" className="pure-u-23-24" required="" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-city">City</label>
                  <input type="text" id="multi-city" className="pure-u-23-24" />
                </div>
                <div className="pure-u-1 pure-u-md-1-3">
                  <label htmlFor="multi-state">State</label>
                  <select id="multi-state" className="pure-input-1-2">
                    <option>AL</option>
                    <option>CA</option>
                    <option>IL</option>
                  </select>
                </div>
              </div>
              <label htmlFor="multi-terms" className="pure-checkbox">
                <input type="checkbox" id="multi-terms" /> I&#x27;ve read the terms and conditions
              </label>
              <button type="submit" className="pure-button pure-button-primary">Submit</button>
            </fieldset>
          </form>
        </main>
      </div>
      <footer>
      </footer>
    </div>
  )
}

export function getServerSideProps() {
  return { 
    props: { name: process.env.USERNAME } 
  }
}
