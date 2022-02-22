import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post');

  // connects to the database version that will be used
  const jateDb = await openDB('jate', 1);

  // creates a new field into specific db 
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open object store 
  const store = tx.objectStore('jate');

  // .add method will store & pass content
  const request = store.add({ jake: content });

  // request confirmation
  const result = await request;
  console.log('Data saved to database', result);
};

// TODO: Add logic for a method that gets ALL the content from the database
export const getAllDb = async () => {
  console.log('Get All from db');

  // connects to the database version that will be used
  const jateDb = await openDB('jate', 1);

  // creates a new field into specific db 
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open object store 
  const store = tx.objectStore('jate');

  // .getAll will get all data from db
  const request = store.getAll();

  // Confirmation of request
  const result = await request;
  console.log('Data Saved', result);
  return result;
};

initdb();
