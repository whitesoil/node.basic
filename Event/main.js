var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = functioono(){
  coonsole.log('I hear a scream!');
}

eventEmitter.on('scream',myEventHandler);

eventEmitter.emit('scream');
