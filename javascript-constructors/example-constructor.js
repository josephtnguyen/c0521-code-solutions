function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('value of typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var aVariable = new ExampleConstructor();
console.log('value of aVariable:', aVariable);

var isAnInstance = aVariable instanceof ExampleConstructor;
console.log('value of isAnInstance:', isAnInstance);
