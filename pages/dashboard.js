import { useSession } from "next-auth/react"
import {databaseCollections} from "../services/constants"
import { list } from "../services/databaseOperations"

export default function Dashboard({ wordsList }) {
  const { data: _session } = useSession()
  return (
    <>
      <h1 className="text-xl pb-5">Your words list</h1>
      { wordsList.map((wordItem)=> {
        return <div className="border p-3 w-full shadow-sm mb-5 bg-gray-200">{wordItem.word}</div>
      }) }
    </>
  )
}

export async function getServerSideProps(_context) {
  const wordsList = await list({}, databaseCollections.words)

  return {
    props: { wordsList }
  }
}
