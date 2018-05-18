import {List, Record} from 'immutable';

const Service = Record({

    name: '',
    description: '',
    type: '',
    url: '',
    tags: List()

});

export default Service;