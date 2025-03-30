let rows = 5;
let str = ''; 

for(i=0; i<rows; i++){
    for(j=0; j< rows-i; j++){
        str += '* '
    }
    str += '\n'
}

console.log(str)

str = ''; 

for(i=0; i<rows; i++){
    for(j=0; j< rows-i; j++){
        str += `${j+1} `
    }
    str += '\n'
}

console.log(str)

str = ''; 

for(i=0; i<rows; i++){
    for(j=0; j< rows-i; j++){
        str += `${String.fromCharCode(65+j)} `
    }
    str += '\n'
}

console.log(str)