'use strict'

var LList = require('./Llist')

function Test(){

  var list = new LList
    list.insert('a', 'head')
    list.insert('x', 'a')
    list.insert('c', 'x')
    list.insert("m", 'c')
    list.insert('z', 'm')
    list.advance('x', 2)
    list.display()
  }

Test()

