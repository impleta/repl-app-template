#!/usr/bin/env node

import { ReplApp } from '@impleta/repl-app';
import Path from 'path';
import {fileURLToPath} from 'url';

ReplApp.start(await getInitFilePaths());

async function getInitFilePaths() {
  const initFiles = [];
  const initFileName = 'ReplApp.init.js';

  const currentPath = Path.dirname(fileURLToPath(import.meta.url));
  const initFile = Path.join(currentPath, initFileName);

  initFiles.push(initFile);

  return initFiles;
}
