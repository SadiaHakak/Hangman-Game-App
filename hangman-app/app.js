'use strict'

let p =document.querySelector('#puzzle')
let g =document.querySelector('#guessLeft')
// ..............................................




g1.renderPuzzle()
g1.statusMessage
// ............key strokes taken as a guess.............
window.addEventListener('keypress',function(e){
  const guess = String.fromCharCode(e.charCode)
  g1.makeGuess(guess)
  g1.checkStatus()
  g1.renderPuzzle()
  g1.statusMessage
})



// ..............HTTP REQUESTS..........  ///this is asychronous
// getPuzzle(5,(error,success)=>{
// 	if(error){
//          console.log(`Error: ${error}`)
// 	}else{
// 		console.log(success)
// 	}
// })
// 
// 


  getPuzzle(3).then((puzzle)=>{
       console.log(puzzle)
  }).catch((e)=>{
    console.log(e)
  })











// function greeting(name) {
//   alert('Hello ' + name);
// }

// function processUserInput(callback) {
//   var name = prompt('Please enter your name.');
//   callback(name);
// }

// processUserInput(greeting);