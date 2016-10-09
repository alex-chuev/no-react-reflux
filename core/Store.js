var EventEmitter = require('events');

module.exports = class Store extends EventEmitter {
    trigger() {
        this.emit('change');
    }
};
