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

const list = async (query, collection) => {
  try {
    const db = deta.Base(collection)
    const { items } = await db.fetch(query);
    return items
  } catch(e) {
    return []
  }
}
export { insert, list }
