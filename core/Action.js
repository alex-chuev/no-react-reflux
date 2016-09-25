var EventEmitter = require('events');
var forEach = require('foreach');

/**
 * @param {string[]} methods
 * @constructor
 */
function Action(methods) {
    EventEmitter.call(this);

    forEach(methods, function (method) {
        if(typeof method === 'function') {
            this[getMethodName(method)] = method.bind(this);
        } else if(typeof method === 'string') {
            this[method] = this.emit.bind(this, method);
        }
    }, this);
}

Action.prototype = Object.create(EventEmitter.prototype);
Action.prototype.constructor = Action;

module.exports = Action;

function getMethodName(method) {
    return method.name || method.toString().match(/^function\s*([^\s(]+)/)[1];
}
