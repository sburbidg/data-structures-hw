//jshint node: true
'use strict';

var cue = require('./queue.js');

function Test(word){
  var ate = new cue();

for(var i = 0; i < word.length; i++){
  ate.pushBack(word[i]);
}
  ate.pushFront();
  ate.popFront();

  ate.popBack();
  ate.pushBack();


return ate.popBack();

}

console.log(Test([1, 2, 3, 4]));
