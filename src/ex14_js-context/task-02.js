'use strict'

function Hangman(word){
    
    
    this.startAgain = function (word){
        this.word = word;
        this.wrongGuessesLeft = 6;
        this.wrongGuesses = [];
        this.rigthGuesses = [];
        this.currentWord = '';
    }


    this.guess = function (letter){
        if (this.word.includes(letter)){
            this.rigthGuesses.push(letter);
            if (this.getGuessedString() === this.word){
                return this.word + ' | You won!' 
            }
        } else {
            this.wrongGuessesLeft --;
            this.wrongGuesses.push(letter);
            if (this.wrongGuessesLeft > 0){
                console.log('wrong letter, errors left ' + this.wrongGuessesLeft + ' | ' + this.wrongGuesses);
            } else {
                console.log('You have lost');
            }
        }
        return this;
    }

    this.getGuessedString = function (){
        return this.word;
    }

    this.getGuessedString = function (){
        this.currentWord = ''
        for (let letter in this.word){
            if (this.rigthGuesses.includes(this.word[letter])){
                this.currentWord += this.word[letter];    
            } else {
                this.currentWord += '_';
            }
        }
        return this.currentWord;
    }
    this.getErrorsLeft = function (){
        return this.wrongGuessesLeft;
    }

    this.getWrongSymbols = function (){
        return this.wrongGuesses;
    }

    this.getStatus = function (){
        return this.getGuessedString() + ' | errors left ' + this.getErrorsLeft;
    }
  
}


var myhangman = new Hangman('dadd')



module.exports = myhangman;