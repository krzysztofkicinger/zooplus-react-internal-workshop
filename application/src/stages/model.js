import {List, Record} from 'immutable';

const Stage = Record({
    name: '',
    description: '',
    type: '',
    services: List(),
    tags: List()
});

export default Stage;