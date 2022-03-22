import corePath from 'path';

import { dirname } from './dirname.js';

export const relativePath = (path) => corePath.join(dirname(), path);
