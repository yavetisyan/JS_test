// let array = [1, 3, 4];


// console.log(array);
// array[1] = 'string';
// console.log(typeof array[2]);
// console.log(array);

//let array = ['inchv or tox', 'aysor', 'lorem ipsum', 'mekel urish tox'];

// array[20] = 'nor text';
// console.log(array.length);
// console.log(array.length - 1);
// console.log(array);
// console.log('---------');

// array['someIndex'] = 'new';
// console.log(array);
// console.log(array.length);


// let arr = new Array();
// console.log(arr);


// let text = 'hi';

// console.log(Array.isArray(text));
// console.log(Array.isArray(array));

//let array = ['inchv or tox', 'aysor', 'lorem ipsum', 'mekel urish tox'];

// console.log(array);
// console.log(array.join(' | '));
// console.log('--------');
// // console.log(array);
// // console.log(array.reverse());
// //console.log(array.sort()); //dasavoruma aybenakan kargi

// //console.log(array.splice(1, 1, 6, 'esim inch'));
// console.log(array);
// delete array[3];
// console.log(array);
// array.push('verjum'); //avelacnuma zangavi verjum
// console.log(array);
// array.pop() //jnjum e zangvacic mejic vejin tarry
// console.log(array);
// array.unshift(34); //avelacnum e zangvaci skzbic
// console.log(array);
// array.shift();//zangvacic jnjum e arajin elementy
// console.log(array);


//array.concat('hello', ['mi ban', ' u eli mi ban']); //kcum e urish zangvaci het
//console.log(array.concat('hello', ['mi ban', ' u eli mi ban']));


let array = ['inchv or tox', 'aysor', 'lorem ipsum', 'mekel urish tox'];

array.forEach(function (element, index, array) {
    array[index] = element.toUpperCase();
});
console.log(array,' -->heto');