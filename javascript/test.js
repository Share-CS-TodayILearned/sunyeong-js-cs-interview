let ob = null;

let aob = ob && ob.name;
let oob = ob?.name;


console.log(aob); // null
console.log(oob); // undefined

ob='';

aob = ob && ob.name;
oob = ob?.name;

console.log(aob); // 
console.log(oob); // undefined

ob=0;

aob = ob && ob.name;
oob = ob?.name;

console.log(aob); // 0
console.log(oob); // undefined

ob={name:123};

aob = ob && ob.name;
oob = ob?.name;

console.log(aob); // 0
console.log(oob); // undefined


