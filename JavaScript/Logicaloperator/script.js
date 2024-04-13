let hasd = true;

let eyevision = false;
console.log(hasd && eyevision);
console.log(hasd || eyevision);

console.log(hasd && !eyevision);
console.log(!hasd && eyevision);
console.log(!hasd && !eyevision);

let isTired = true;
console.log(isTired && hasd && eyevision);
console.log(isTired || hasd || eyevision);
console.log(isTired && hasd && !eyevision);