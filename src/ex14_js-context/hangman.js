'use strict'
function Hangman(word){
    
    
    this.startAgain = function (word){
        this.word = word;
        this.wrongGuessesLeft = 6;
        this.wrongGuesses = [];
        this.rigthGuesses = [];
        this.currentWord = '';
    }

    this.startAgain(word);

    this.guess = function (letter){
        if (this.word.includes(letter)){
            this.rigthGuesses.push(letter);
            if (this.getGuessedString() ){
                console.log('U WIN!!!!!!!!');
            }
        } else {
            this.wrongGuessesLeft --;
            this.wrongGuesses.push(letter);
            if (this.wrongGuessesLeft > 0){
                console.log('You are wrong. You have ' + this.wrongGuessesLeft + ' wrong guesses left');
            } else {
                console.log('LoL. U died');
            }
        }
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
        console.log(this.currentWord);
        return this.currentWord === this.word;
    }
    this.getErrorsLeft = function (){
        return this.wrongGuessesLeft;
    }

    this.getWrongSymbols = function (){
        return this.wrongGuesses;
    }

  
}


var myhangman = new Hangman('dadd')

// console.log(myhangman.getGuessedString())
myhangman.guess('s')

myhangman.guess('d')
myhangman.guess('a')