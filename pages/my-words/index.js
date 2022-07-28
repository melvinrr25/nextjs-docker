import { useSession } from "next-auth/react"
import { useState } from 'react';

export default function MyWords() {
  const { data: session } = useSession()
  const [error, setError] = useState(null);
  const [word, setWord] = useState(null);
  const [wordMeaning, setWordMeaning] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [sentences, setSentences] = useState([1,2,3,4]);

  const handleSubmit = () => { console.log(1) }

  const handleSentenceChange = (val, index) =>{
    setSentences(current => {
      const list = [...current][index]
      list[index] = val
      return list
    })
  }

  if (session) {
    return (
      <>
        <section className=" min-h-screen pt-10">
          <div className="h-full gradient-form shadow-sm bg-white p-4">
            <form onSubmit={ handleSubmit}>
              <div className="">
                <h2 className="font-bold text-lg pb-4">New Word</h2>
                <label>
                  <span className="mb-2 block"> Your word: </span>
                  <input
                    type="text"
                    className="form-control mb-3 md:mb-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    defaultValue={word}
                    onChange={e => setWord(e.target.value) }
                  />
                </label>
              </div>
              <div className="">
                <label>
                  <span className="mb-2 block">Meaning:</span>
                  <input
                    type="text"
                    className="form-control mb-3 md:mb-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    defaultValue={wordMeaning}
                    onChange={e => setWordMeaning(e.target.value) }
                  />
                </label>
              </div>
              <div className="">
                <div>
                  <h2 className="font-bold text-lg py-4">Sentences</h2>
                </div>
                <label>
                  {sentences.map((value, index) => {
                    return <input 
                      className="form-control mb-3 md:mb-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                      defaultValue={value}
                      key={index} onChange={ (e) => { handleSentenceChange(e.target.value, index) }} 
                    />
                  })}
                </label>
              </div>
            </form>
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
    </>
  )
}
