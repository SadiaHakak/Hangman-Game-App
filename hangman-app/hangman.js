'use strict'



class Hangman{
       constructor(word,guesses){
       this.word = word.toLowerCase().split('');
       this.remainingGuesses = guesses
       this.guessedLetters = []
       this.status = 'playing'
       }
       // .................MAKING A GUESS.................
       makeGuess(guess){
               guess = guess.toLowerCase()
        let isUnique=!this.guessedLetters.includes(guess)
        let isBadGuess=!this.word.includes(guess)

        if(isBadGuess && isUnique && this.status==='playing'){
          this.remainingGuesses--
        }
        if(isUnique && this.status==='playing'){
          this.guessedLetters.push(guess)
        }
       }
       //..............CREATE PUZZLE................
       get Puzzle(){
           let puzzle = ''
           this.word.forEach((letter)=>{
           if(this.guessedLetters.includes(letter) || letter === ' '){
             puzzle+=letter
            }else{
              puzzle+='*'
            }
           })
            return puzzle
           }

           // ..........................RENDER PUZZLE............
           renderPuzzle(){
            p.textContent = this.Puzzle;
            g.textContent = this.statusMessage;
           }
           // ................CHECK STATUS..............
           checkStatus(){
              const isRemainingGuesses = this.remainingGuesses>0;
              const isPuzzleComplete = !this.Puzzle.includes('*');
              if(!isRemainingGuesses){
                this.status = 'failed'
              }
              if(isPuzzleComplete){
                this.status = 'finished'
              }
              return this.status
              }
            // ...............STATUS MESSAGE...............
           get statusMessage(){
                  if(this.status ==='playing'){
                  return `Guesses Left: ${this.remainingGuesses}`
                  }
                  else if(this.status ==='failed'){
                    return `Nice try - the word was "${this.word.join('')}" `
                  }else if(this.status ==='finished'){
                    return 'Great Job ! You guessed the word'
                  }
                }

}




// ...........................CREATE HANGMAN INSTANCE..............
const g1 = new Hangman('new born baby',3) 

