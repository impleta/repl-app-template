/**
 * This is executed on REPL startup.
 * 
 * Any exports are accessible at the top-level in the REPL, and 
 * any scripts executed by the repl.
 */

export {assert} from 'chai';
import { TestClass } from './TestClass';

const TC = new TestClass();
export {TestClass, TC};