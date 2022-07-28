import { Deta } from 'deta'
import { databaseCollections } from './constants';
const deta = Deta(process.env.DETA_KEY)

const insert = async (objectToInsert) => {
  try{
    const db = deta.Base(databaseCollections.words)
    return await db.insert(objectToInsert);
  } catch(e) {
    return null
  }
}

export { insert }
