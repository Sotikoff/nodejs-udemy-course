import fs from 'fs';

import { relativePath } from '../utils/relativePath.js';

export class FileDataLayer {
  static saveCollection(collectionName, collection) {
    fs.writeFileSync(relativePath(`../fileDB/${collectionName}.json`), JSON.stringify(collection));
  }

  static getCollection(collectionName, fallbackValue = undefined) {
    try {
      const collection = fs.readFileSync(relativePath(`../fileDB/${collectionName}.json`));
      const parsedCollection = JSON.parse(collection);

      if (fallbackValue) {
        return parsedCollection ?? fallbackValue;
      }

      return parsedCollection;
    } catch {
      return fallbackValue ?? null;
    }
  }

  static getCollectionItemById(collectionName, id) {
    return this.getCollectionItems(collectionName).find(({ id: itemId }) => itemId === id);
  }
}
