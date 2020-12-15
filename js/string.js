/* let str2 = "Some 'string' for test";
let str3 = `Some 'string' "for test"`;

let str4 = 'Some \'string\' for test';

let str5 = '\tSome \n\t\tstring for \n\ttest';

console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);
console.log(str5);
console.log(' ---------------- '); */


let str = 'Some string for test';

// console.log(str.length); //veradarcnum e toxi erkarutyuny
// console.log(str.charAt(5)); // veradarcnuma toxi (number)  simvoly
// console.log(str.substring(5, 9)); //(number,number) tvic skcum e myus tvov verjacnum toxy
// console.log(str.substr(5, 10)); //(number,number) tvic skcum e ev myus number-y asum e te qani hat symbol veradarcni
// console.log(str.slice(-6)); //veradarcnum e nshvac tvic heto mnacac symbolnery
// console.log(str.split(' ')); //veradarcnum e mez zangvac nshac symbolov (nerka pahin probenerov e anjatum)
// console.log(str.indexOf('S')); // veradarcnum e nshvac symboli indexy
// console.log(str.lastIndexOf('s')); // veradarcnum e nshvac symboli indexy verjic hashvac
// console.log(str.replace('s', 'P')); // arajiny talis enq te inch symbol enq uzum poxenq, heto inchi het, poxum e arajin handipac syboly
// console.log(str.replaceAll('s', 'W'));
// console.log(str.toUpperCase()); //toxy sarqum e mecatar
// console.log(str.toLowerCase()); // toxer sarqum e poqratar
// console.log(str);

//---- Test -----

let test = 'Some text for example';

console.log(test);
console.log(test.length);
console.log(test.charAt(15)); //e
console.log(test.substring(0, 4)); //Some
console.log(test.substr(6, 4)); //extg
console.log(test.split(' '));
console.log(test.indexOf('exa')); //15
console.log(test.lastIndexOf('x')); //16
console.log(test.replace('t', 'w')); //Some wext for  example
console.log(test.replaceAll('text', 'tuxt')); //Some tuxt for  example

let newString = new String('New string 1');

console.log(typeof newString);
console.log(newString.replace());


let good = 'good axper';
console.log(`Lorem ipsum, string for ${good} developer`);

let name = 'Yura';
let age = 22;

console.log(`
   Name: ${name}
   age:${age}
`);