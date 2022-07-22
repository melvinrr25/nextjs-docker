import { useRouter } from 'next/router'
import { getSession, getCsrfToken, signIn } from 'next-auth/react'
import { useState } from 'react';

function Login({ csrfToken }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter()

  const handleSubmit = async () => {
    const res = await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });

    if (res && res.ok){
      setError(null)
      return router.push('/dashboard')
    }

    setError("Invalid credentials.")
  }
  return (
    <>
      <section className=" min-h-screen flex items-center">
        <div className="h-full gradient-form w-[300px] m-auto shadow-sm bg-white p-4">
          <img className="mx-auto w-48" src="/logo.svg" alt="logo" />
          <form>
            <input type="hidden" defaultValue={ csrfToken } />
            <p className="mb-4 mt-4">Please login to your account</p>
            <div className="mb-4">
              <input
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Email"
                defaultValue={email}
                onChange={e => setEmail(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Password"
                defaultValue={password}
                onChange={ e => setPassword(e.target.value) }
              />
            </div>
            <div className="text-center pt-1 mb-12 pb-1">
              <button
                className="bg-blue-500 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="button"
                onClick={handleSubmit}
              >
                Log in
              </button>
              { error && (
                <div className="text-red-500">{error}</div>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { res } = context;
  const session = await getSession(context)
  console.log(session)  
  if (session && res && session.user){
    res.writeHead(302, { Location: "/dashboard" })
    res.end()
    return  { props: { } }
  }
  
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}

export default Login
