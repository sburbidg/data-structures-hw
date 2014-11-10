'use strict'

var cue = require('./queue.js')

function HeyPal(palcan){
  var p = new cue

  var palWord = palcan.split('')
  for(var i = 0; i < palWord.length; i++){
    p.pushBack(palWord[i])
  }

  while (p.popFront() == p.popBack())
    return true
  return false
}

