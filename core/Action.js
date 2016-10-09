var EventEmitter = require('events');
var forEach = require('foreach');

var getMethodName = require('../helpers/getMethodName');

module.exports = class Action extends EventEmitter {
    /**
     * @param {string[]|function[]} methods
     */
    constructor(methods) {
        super();

        forEach(methods, function (method) {
            if(typeof method === 'function') {
                this[getMethodName(method)] = method.bind(this);
            } else if(typeof method === 'string') {
                this[method] = this.emit.bind(this, method);
            }
        }, this);
    }
};
