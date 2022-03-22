import fs from 'fs';
import path from 'path';

import { relativePath } from '../utils/relativePath.js';

export class DataLayer {
  static saveItemToCollection(collectionName, item) {
    const items = this.getCollectionItems(collectionName);
    items.push(item);
    fs.writeFileSync(relativePath(`../fileDB/${collectionName}.json`), JSON.stringify(items));
  }

  static getCollectionItems(collectionName) {
    try {
      const dbContent = fs.readFileSync(relativePath(`../fileDB/${collectionName}.json`));
      return JSON.parse(dbContent);
    } catch {
      return [];
    }
  }
}
