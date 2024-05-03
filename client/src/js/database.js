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
  const jate = await openDB('jate', 1);
  const jateStore = jate
      .transaction('jate', 'readwrite')
      .objectStore('jate');
  const result = await jateStore.put({ text: content });
  return result;
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jate = await openDB('jate', 1);
  const jateStore = jate
      .transaction('jate', 'readonly')
      .objectStore('jate');
  const result = jateStore.getAll();
  return result;
}

initdb();
