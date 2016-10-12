const assert = require('assert');
const sinon = require('sinon');
const EventEmitter = require('events');

const Action = require('../core/Action');

describe('Action', function () {
    describe('instance', function () {
        /**
         * @property {function} update
         * @property {function} doComplexAction
         */
        var action = new Action([
                'update',
                ['doComplexAction', doComplexAction]
            ]),
            complexActionResults = {};

        function doComplexAction() {
            this.emit('done', complexActionResults);
        }

        it('should be an instance of the EventEmitter', function () {
            assert(action instanceof EventEmitter);
        });

        it('should have specified methods', function () {
            assert.equal(typeof action.update, 'function');
            assert.equal(typeof action.doComplexAction, 'function');
        });

        describe('update method', function () {
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

        describe('doComplexAction method', function () {
            it('should emit done event with action results', function () {
                var callback = sinon.spy();
                action.on('done', callback);
                action.doComplexAction();

                assert(callback.called);
                assert(callback.calledWith(complexActionResults));
            });
        });
    });
});
