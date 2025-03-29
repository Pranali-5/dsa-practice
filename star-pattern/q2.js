let rows=5;
let str=''

for(i=0; i<rows; i++){
    for(j=0 ; j< 2 * (rows-i) -1; j++){
        str+=' '
    }
    for (k=0; k<=i; k++){
        str+='* '
    }
    str+='\n'
}
console.log(str)


str=''

for(i=0; i<rows; i++){
    for(j=0 ; j< 2 * (rows-i) -1; j++){
        str+=' '
    }
    for (k=0; k<=i; k++){
        str+=`${k+1} `
    }
    str+='\n'
}
console.log(str)

str=''

for(i=0; i<rows; i++){
    for(j=0 ; j< 2 * (rows-i) -1; j++){
        str+=' '
    }
    for (k=0; k<=i; k++){
        str+=`${String.fromCharCode(65+k)} `
    }
    str+='\n'
}
console.log(str)

/* output:

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