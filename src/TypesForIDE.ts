// These exports are necessary for the IDE to pick up the types from 
// the .js files in repl-app-scripts.

import {assert as chaiAssert} from 'chai';
import { TestClass } from './TestClass';

export const TC = new TestClass();
export const assert = chaiAssert;
