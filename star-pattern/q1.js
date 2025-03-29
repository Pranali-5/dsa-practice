
let rows = 5
let str =''
for(let i=0; i<rows; i++){
    for (let j=0; j<=i; j++){
        str+= '* '
    }
    str+='\n'
}
console.log(str)

str =''
for(let i=0; i<rows; i++){
    for (let j=0; j<=i; j++){
        str+= `${j+1} `
    }
    str+='\n'
}
console.log(str)

str =''
for(let i=0; i<rows; i++){
    for (let j=0; j<=i; j++){
        str+= `${String.fromCharCode(65+j)} `
    }
    str+='\n'
}
console.log(str)

/* Output:

* 
* * 
* * * 
* * * * 
* * * * * 

1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 

A 
A B 
A B C 
A B C D 
A B C D E 

*/