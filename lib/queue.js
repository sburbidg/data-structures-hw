//jshint node:true
'use strict'

function Queue(){
  this.dataStore = [];
}

Queue.prototype = {
  pushBack: function(element){
    this.dataStore.push(element);
  },

  popBack: function(){
    return this.dataStore.pop();
  },

  pushFront: function(element){
    this.dataStore.unshift(element);
  },

  popFront: function(){
    return this.dataStore.shift();
  },

  front: function(){
    return this.dataStore[0];
  },

  back: function(){
    return this.dataStore[this.dataStore.length - 1];
  },

  toString: function(){
    var retStr = '';
    for (var i = 0; i < this.dataStore.length; i++) {
      retStr += this.dataStore[i] + '\n';
    }
    return retStr;
  },

  empty: function(){
    if (this.dataStore.length === 0){
      return true;
    }
    return false;
  },
};

module.exports = Queue;
