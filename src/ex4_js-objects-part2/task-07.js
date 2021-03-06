'use strict'

function cutStr(someString, estimatedLength){
    let result = someString;
    if (someString.length > estimatedLength){
        result = someString.substr(0, estimatedLength - 1);
        result += '…';
    }
    return result;
}

module.exports = cutStr;
