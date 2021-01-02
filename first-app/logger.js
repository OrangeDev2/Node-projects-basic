const EventEmitter = require('events'); // Loads module named EventEmitter as a Class

class Logger extends EventEmitter { // 2 Classes - Logger and [ EventEmitter (this) ]

    log(message) {
        // Send an HTTP request
        console.log(message);

        // Raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'}); 
    }   
}

module.exports = Logger;
