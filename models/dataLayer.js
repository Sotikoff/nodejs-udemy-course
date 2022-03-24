import fs from 'fs';
import path from 'path';

import { relativePath } from '../utils/relativePath.js';

export class DataLayer {
  static saveCollection(collectionName, collection) {
    fs.writeFileSync(relativePath(`../fileDB/${collectionName}.json`), JSON.stringify(collection));
  }

  static getCollection(collectionName, callback) {
    try {
      const collection = fs.readFileSync(relativePath(`../fileDB/${collectionName}.json`));
      const parsedCollection = JSON.parse(collection);

      if (callback) {
        callback(parsedCollection);
      }

      return parsedCollection;
    } catch {
      return null;
    }
  }

  static getCollectionItemById(collectionName, id) {
    return this.getCollectionItems(collectionName).find(({ id: itemId }) => itemId === id);
  }
}
