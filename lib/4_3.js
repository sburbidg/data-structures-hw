//jshint node: true
'use strict'

var stack = require('./stack.js');

function Yellow(pez){
  var y = new stack();
  var o = new stack();

  var splitPez = pez.split('');

  for(var i = 0; i < splitPez.length; i++){
    if(splitPez[i] == 'y'){
      y.push(i);
    } else {
      o.push(splitPez[i]);
    }
  }
  var others = [];
  while(o.length() > 0);
    others.push(o.pop());
  return others.reverse();
}

console.log(Yellow("rybkhkiryby"));
