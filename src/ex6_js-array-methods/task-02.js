'use strict'

function mySome(someArray, cback){
    let flag = false;
    let i = 0;
    while (i < someArray.length && !flag){
        if (cback(someArray[i], i, someArray)){
            flag = true;
        }
        i++;
    }
    return flag;
}

module.exports = mySome;