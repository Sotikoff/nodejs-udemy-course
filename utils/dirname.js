import { fileURLToPath } from 'url';
import { dirname as coreDirname } from 'path';

export function dirname() {
  const __filename = fileURLToPath(import.meta.url);
  return coreDirname(__filename);
}
