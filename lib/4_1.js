//jshint node: true

'use strict';

var stack = require('./stack.js');

var parens = function(eq) {
  var p = new stack();

  var splitEq = eq.split('');
  for (var i = 0; i < splitEq.length; i++) {
    if (splitEq[i] == '(' ){
      p.push();
    } else if(splitEq[i] == ')') {
      p.pop();
    }
  }
    var arr = [];
    while (p.length() !== 0);
      arr.push(p.pop());
    return arr;

};

