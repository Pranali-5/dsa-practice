let rows = 5;
let str = '';

for(i=0; i<rows; i++){
    for(j=0; j< 2*(rows-i)-1; j++){
        str += ' '
    }

    for(k = 0; k < 2 * i +1; k++){
        str += '* '
    }
    str += '\n'
}

console.log(str)

str = ''

for(i=0; i<rows; i++){
    for(j=0; j< 2*(rows-i)-1; j++){
        str += ' '
    }

    for(k = 0; k < 2 * i +1; k++){
        str += `${k+1} `
    }
    str += '\n'
}

console.log(str)

str = ''

for(i=0; i<rows; i++){
    for(j=0; j< 2*(rows-i)-1; j++){
        str += ' '
    }

    for(k = 0; k < 2 * i +1; k++){
        str += `${String.fromCharCode(65+k)} `
    }
    str += '\n'
}

console.log(str)