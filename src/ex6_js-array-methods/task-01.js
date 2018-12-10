'use strict'

function mySlice(someArray, begin, end){
    var first = begin;
    var last = end;
    var result = new Array();
    
    if (begin === undefined){
        first = 0;
    } 
    if (begin < 0){
        first = someArray.length + begin;
    }

    if (end === undefined){
        last = someArray.length;
    }

    if (end < 0){
        last = someArray.length + end;
    }

    for (let i = first; i < last; i++){
        result.push(someArray[i]);
    }
    return result;
}

module.exports = mySlice;
