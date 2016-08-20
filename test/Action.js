const assert = require('assert');
const sinon = require('sinon');
const EventEmitter = require('events');

const Action = require('../core/Action');

describe('Action', function () {
    describe('instance', function () {
        var action = new Action([
            'update'
        ]);

        it('should be an instance of the EventEmitter', function () {
            assert(action instanceof EventEmitter);
        });

        it('should have specified methods', function () {
            assert.equal(typeof action.update, 'function');
        });

        describe('specified methods', function () {
            it('should emit an event with name of itself and pass arguments as is', function () {
                var callback = sinon.spy(),
                    argument1 = 'string',
                    argument2 = {},
                    argument3 = [];

                action.on('update', callback);
                action.update(argument1, argument2, argument3);

                assert(callback.called);
                assert(callback.calledWith(argument1, argument2, argument3));
            });
        });
    });
});
