var EventEmitter = require('events');
var forEach = require('foreach');

/**
 * @param {string[]} methods
 * @constructor
 */
function Action(methods) {
    EventEmitter.call(this);

    forEach(methods, function (method) {
        this[method] = this.emit.bind(this, method);
    }, this);
}

Action.prototype = Object.create(EventEmitter.prototype);
Action.prototype.constructor = Action;

module.exports = Action;
