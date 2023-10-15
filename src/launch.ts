#!/usr/bin/env node
// A wrapper to allow starting the index.js with --experimental-vm-modules
import {spawn} from 'child_process';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const childProcess = spawn('node', ['--no-warnings', '--experimental-vm-modules', path.join(__dirname, './index.js'), ...process.argv.slice(2)], {
  stdio: 'inherit',
});
