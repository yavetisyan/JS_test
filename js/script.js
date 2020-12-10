let num = 50;

if (num < 49) {
    console.log('Thats is not correct');
} else if (num > 100) {
    console.log('Thats more');
} else {
    console.log('Correct');
}

(num == 50) ? console.log('Correct'): console.log('Not Correct');

switch (num) {
    case num < 49:
        console.log('Thats is not correct');
        break;
    case num > 100:
        console.log('Thats more');
        break;
    case num > 80:
        console.log('Thats more too');
        break;
    case 50:
        console.log('Correct');
        break;

    default:
        console.log('Something wrong');
        break;
}

