import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
    console.error(error);
  }
};

await generateContacts(5);
