'use strict';

//Karl Gentner gave me a more readable version of the stack function.

var Stack = function() {
  this.dataStore = [];
  this.top = 0;

  this.push = function(element) {
    this.dataStore[this.top++] = element;
  };

  this.peek = function() {
    return this.dataStore[this.top - 1];
  };

  this.pop = function() {
    return this.dataStore[--this.top];
  };

  this.clear = function() {
    this.top = 0; this.dataStore.length = 0;
  };

  this.length = function() { return this.top;
  };
};

module.exports = Stack
