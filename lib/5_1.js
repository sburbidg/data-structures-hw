'use strict'

var cue = require('./queue.js')

function Test(word){
  var ate = new cue

for(var i = 0; i < word.length; i++){
  ate.pushBack(word[i])
}
  ate.pushFront(80)
  ate.popFront()

  ate.popBack()
  ate.pushBack('Hey Word')


return ate.popBack()

}

console.log(Test([1, 2, 3, 4]))
