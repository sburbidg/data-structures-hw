'use strict';
var stack = require('./stack.js')



var parens = function() {
  var p = new stack()
  var eq = '2*(58(2+(3)'
  var aEq = eq.split("")
  for (var i = 0; i < aEq.length; i++) {
    if (aEq[i] == '(' || ')') {
      p.push(aEq)

      return p.dataStore
    }
  }
}
console.log(parens())

console.log(p.dataStore)

