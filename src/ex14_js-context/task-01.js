'use strict'


function calculator(){
    this.result = 0;
    this.reset = function(){
        this.result = 0;
        return this;
    }

    this.add = function(number){
        if(number !== undefined){
            this.result += number;
        }
        return this;
    }

    this.multiply = function(number){
        if(number !== undefined){
            this.result *= number;
        }
        return this;
    }

    this.subtract = function(number){
        if(number !== undefined){
            this.result -= number;
        }
        return this;
    }

    this.divide = function(number){
        if(number !== undefined){
            this.result /= number;
        }
        return this;
    }

    this.getResult = function(){
        return this.result;
    }

    this.setState = function(number){
        if(number !== undefined){
            this.result = number;
        }
        return this;
    }

    this.fetchData = function(cback){
        cback(500);
        this.result = 500;
    }
}

var mycalc = new calculator();
mycalc.reset();
console.log(mycalc.getResult());
mycalc.add(2);
console.log(mycalc.getResult());


module.exports = mycalc;