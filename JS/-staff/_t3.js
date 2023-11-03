const sourceObj = {
  a: 'test1',
  getA() { return this.a; },
};

console.log(sourceObj.getA());

const clonedObj = structuredClone(sourceObj);

console.log(clonedObj);
