'use strict'

function every(someArray, cback){
    let flag = true;
    let i = 0;
    while (i < someArray.length && flag){
        if (!cback(someArray[i], i, someArray)){
            flag = false;
        }
        i++;
    }
    return flag;
}

module.exports = every;