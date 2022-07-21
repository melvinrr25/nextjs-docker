
export default function Home({ name }) {

  return (
      <main className="">
        <form className="">
          <fieldset>
            <legend>Legend</legend>
            <div className="">
              <div className="">
                <label htmlFor="multi-first-name">First Name</label>
                <input type="text" id="multi-first-name" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-last-name">Last Name</label>
                <input type="text" id="multi-last-name" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-email">E-Mail</label>
                <input type="email" id="multi-email" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-city">City</label>
                <input type="text" id="multi-city" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-state">State</label>
                <select id="multi-state" className="">
                  <option>AL</option>
                  <option>CA</option>
                  <option>IL</option>
                </select>
              </div>
            </div>
            <label htmlFor="multi-terms" className="">
              <input type="checkbox" id="multi-terms" /> I&#x27;ve read the terms and conditions
            </label>
            <button type="submit" className="">Submit</button>
          </fieldset>
        </form>
        <form className="">
          <fieldset>
            <legend>Legend</legend>
            <div className="">
              <div className="">
                <label htmlFor="multi-first-name">First Name</label>
                <input type="text" id="multi-first-name" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-last-name">Last Name</label>
                <input type="text" id="multi-last-name" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-email">E-Mail</label>
                <input type="email" id="multi-email" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-city">City</label>
                <input type="text" id="multi-city" className="" />
              </div>
              <div className="">
                <label htmlFor="multi-state">State</label>
                <select id="multi-state" className="">
                  <option>AL</option>
                  <option>CA</option>
                  <option>IL</option>
                </select>
              </div>
            </div>
            <label htmlFor="multi-terms" className="">
              <input type="checkbox" id="multi-terms" /> I&#x27;ve read the terms and conditions
            </label>
            <button type="submit" className="">Submit</button>
          </fieldset>
        </form>
      </main>
  )
}

export function getServerSideProps() {
  return { 
    props: { name: process.env.USERNAME } 
  }
}
