var EventEmitter = require('events');
var forEach = require('foreach');

module.exports = class Action extends EventEmitter {
    /**
     * @param {string[]|array[]} actions
     */
    constructor(actions) {
        super();

        forEach(actions, function (action) {
            if(Array.isArray(action)) {
                this[action[0]] = action[1].bind(this);
            } else if(typeof action === 'string') {
                this[action] = this.emit.bind(this, action);
            }
        }, this);
    }
};
