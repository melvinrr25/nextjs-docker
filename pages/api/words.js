import protectRoute from '../../services/protectRoute'
import { insert } from '../../services/databaseOperations'

async function words(req, res) {
  const word = req.body
  const record = await insert(word)

  if (record) {
    return res.status(200).json({ data: record })
  }

  return res.status(422).json({ message: "Unable to save word" })
}

export default protectRoute(words);
