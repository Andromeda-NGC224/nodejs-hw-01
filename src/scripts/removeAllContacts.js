import { PATH_DB } from '../constants/contacts.js'
import fs from 'fs/promises'

export const removeAllContacts = async () => {
  try {
    const clearList = []

    await fs.writeFile(PATH_DB, JSON.stringify(clearList))
  } catch (error) {
    console.error(error)
  }
}

await removeAllContacts()
