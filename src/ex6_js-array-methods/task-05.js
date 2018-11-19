'use strict'

function map(someArray, cback){
    let i = 0;
    let result = [];
    while (i < someArray.length){
        result.push(cback(someArray[i], i, someArray));
        i++;
    }
    return result;
}

module.exports = map;