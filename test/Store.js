const assert = require('assert');
const sinon = require('sinon');
const EventEmitter = require('events');

const Store = require('../core/Store');

describe('Store', function () {
    describe('instance', function () {
        var store = new Store;

        it('should be an instance of the EventEmitter', function () {
            assert(store instanceof EventEmitter);
        });

        it('should have trigger method', function () {
            assert.equal(typeof store.trigger, 'function');
        });

        describe('trigger method', function () {
            it('should call emit method with "change" event name', function () {
                store.emit = sinon.spy();
                store.trigger();

                assert(store.emit.calledWith('change'));
            });
        });
    });
});
