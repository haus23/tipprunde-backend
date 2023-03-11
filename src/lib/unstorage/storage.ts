import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createStorage } from 'unstorage';
import fsDriver from 'unstorage/drivers/fs';

import { config } from 'lib/config';

let { basePath } = config.unstorage;
if (!path.isAbsolute(basePath || '')) {
  basePath = fileURLToPath(new URL(`../../../${basePath}`, import.meta.url));
}

export const storage = createStorage({
  driver: fsDriver({ base: basePath }),
});
