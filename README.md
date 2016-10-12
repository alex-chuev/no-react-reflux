#Simple lightweight implementation of the Reflux

Uses just NodeJS EventEmitter.

##To create an action

    import {Action} from 'no-react-reflux';

    export default new Action([
        'actionName',
        'anotherActionName',
        complicatedAction
    ]);

    function complicatedAction() {
        // Do real stuff

        this.emit('complicatedAction', data, anotherData);
    }

##To create a store

    import {Store} from 'no-react-reflux';

    import ExampleAction from '../actions/ExampleAction';

    class ExampleStore extends Store {
        constructor() {
            super();

            ExampleAction.addListener('actionName', this.onActionName.bind(this));
            ExampleAction.addListener('complicatedAction', this.onComplicatedAction.bind(this));
        }

        onActionName(data) {
            // update store and emit event

            this.emit('event-name')
        }

        onComplicatedAction(data, anotherData) {
            // update store and emit change event

            this.trigger()
        }
    }

    export default new ExampleStore;
