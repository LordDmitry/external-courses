'use strict'

function reduce(someArray, cback, initial){
    let i = 0;
    let result;
    if (initial === undefined){
        i = 1;
        result = someArray[0];
    } else {
        result = initial;
    }
    while (i < someArray.length){
        result = cback(result, someArray[i], i, someArray);
        i++;
    }
    return result;
}

module.exports = reduce;