//jshint node: true

'use strict';

var stack = require('./stack.js');
function Postfix(eq){
  var n = new stack();
  var o = new stack();

  var infix = eq.split('');

  for(var i = 0; i < infix.length; i++){
    if(Number(i) === NaN){
      o.push();
    } else {
      n.push();
    }
  }
}
