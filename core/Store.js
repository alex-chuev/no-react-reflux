var EventEmitter = require('events');

function Store() {
    EventEmitter.call(this);
}

Store.prototype = Object.create(EventEmitter.prototype);
Store.prototype.constructor = Store;

Store.prototype.trigger = function () {
    this.emit('change');
};

module.exports = Store;
