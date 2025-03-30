let rows = 5;
let str = '';

for(i=0; i< rows; i++){

    for(j=0; j< 2*i; j++){
        str += ' '
    }

    for(k=0; k< rows - i; k++){
        str += '* '
    }
str += '\n'
}
console.log(str)

str = '';

for(i=0; i< rows; i++){

    for(j=0; j< 2*i; j++){
        str += ' '
    }

    for(k=0; k< rows - i; k++){
        str += `${k+1} `
    }
str += '\n'
}
console.log(str)

str = '';

for(i=0; i< rows; i++){

    for(j=0; j< 2*i; j++){
        str += ' '
    }

    for(k=0; k< rows - i; k++){
        str += `${String.fromCharCode(65+k)} `
    }
str += '\n'
}
console.log(str)