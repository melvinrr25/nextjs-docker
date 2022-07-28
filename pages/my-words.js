import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'
import { useState } from 'react';

export default function MyWords() {
  const router = useRouter()
  const { data: session } = useSession()
  const [error, setError] = useState(null)
  const [word, setWord] = useState(null)
  const [wordMeaning, setWordMeaning] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [sentences, setSentences] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const wordToInsert = { word, wordMeaning, sentences } 
    const url = 'http://localhost:3000/api/words'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(wordToInsert),
      headers: { 'Content-Type': 'application/json' }
    })

    if(response.status !== 200){
      return alert('error')
    } 

    router.push('/dashboard')
  }

  const addSentence = () => {
    const list = [...sentences]
    list.push({ sentence: '', sentenceMeaning: ''})
    setSentences(list) 
  }

  const handleSentenceChange = (type, val, index) =>{
    setSentences(current => {
      const list = [...current]
      list[index][type] = val
      return list
    })
  }

  if (session) {
    return (
      <>
        <section className=" min-h-screen">
          <div className="h-full gradient-form shadow-sm bg-white p-4">
            <form onSubmit={ handleSubmit}>
              <div className="">
                <h2 className="font-bold text-lg pb-4">Adding a New Word</h2>
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
                  <span className="mt-2 mb-2 block">Meaning:</span>
                  <input
                    type="text"
                    className="form-control mb-3 md:mb-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                    defaultValue={wordMeaning}
                    onChange={e => setWordMeaning(e.target.value) }
                  />
                </label>
              </div>
              <div className="">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-lg py-4">Sentences</h2>
                  <button type="button" className="disabled:opacity-75 bg-green-800 inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 mt-3 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3" onClick={ addSentence }> + Add Sentence </button>
                </div>
                <label>
                  { !sentences.length ? <div className="">No sentences added yet for this word</div> : null}
                  {sentences.map((sentenceObj, index) => {
                    return <div key={index} className="border p-2 mb-4">
                      <input 
                        className="form-control mb-3 md:mb-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                        defaultValue={sentenceObj.sentence}
                        placeholder="Sentence"
                        onChange={ (e) => { handleSentenceChange('sentence', e.target.value, index) }} 
                      />
                      <input 
                        className="form-control mb-3 md:mb-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 border border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none"
                        defaultValue={sentenceObj.sentenceMeaning}
                        placeholder="Sentence Meaning"
                        onChange={ (e) => { handleSentenceChange('sentenceMeaning', e.target.value, index) }} 
                      />
                    </div>
                  })}
                </label>
              </div>
              <div className="flex justify-end">
                <button className="custom-primary-btn" type="submit">Save</button>
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
