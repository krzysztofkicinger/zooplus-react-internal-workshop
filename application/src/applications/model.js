import {List, Record} from 'immutable';

const Application = Record({

    name: '',
    description: '',
    deploymentUrl: '',
    tags: List(),
    stages: List()

});

export default Application;