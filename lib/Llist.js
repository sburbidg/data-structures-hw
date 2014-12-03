//jshint node: true

'use strict';

function Node(element){
  this.element = element;
  this.next = null;
}

function LList(){
  this.head = new Node('head');
}

LList.prototype = {

  find: function(item){
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  },

  insert: function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  },

  display: function() {
    var currNode = this.head;
    while (currNode.next !== null) {
      console.log(currNode.next.element);
      currNode = currNode.next;
    }
  },

  findPrevious: function(item) {
    var currNode = this.head;
    while ((currNode.next !== null) && (currNode.next.element !== item)) {
      currNode = currNode.next;
    }

    return currNode;
  },

  remove: function(item) {
    var prevNode = this.findPrevious(item);
    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  },

  advance: function(item, n){
    var currNode = this.find(item);
    var prevNode = this.findPrevious(item);
    var nNode = currNode;
    for (var i = 0; i < n; i++) {
      nNode = nNode.next;
    }
    prevNode.next = currNode.next;
    currNode.next = nNode.next;
    nNode.next = currNode;
  }

};

module.exports = LList;

