// Example test script 

let ret1 = TestClass.staticMethod('Hello');
assert.equal(ret1, 'Hello', 'TestClass.staticMethod should return the parameter passed in');

// TC is a reference to an instance of TestClass, declared in ReplApp.init.ts
let ret2 = TC.instanceMethod('Howdy!');
assert.equal(ret2, 'Howdy!', 'TestClass.instanceMethod should return the parameter passed in');
