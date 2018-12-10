'use strict'

function filter(someArray, cback){
    let result = [];
    let i = 0;
    while (i < someArray.length){
        if (cback(someArray[i], i, someArray)){
            result.push(someArray[i]);
        }
        i++;
    }
    return result;
}

module.exports = filter;