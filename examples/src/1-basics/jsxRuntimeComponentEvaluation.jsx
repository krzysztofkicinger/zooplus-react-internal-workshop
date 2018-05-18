import React from 'react';

export const Components = {

    Photo: (props) => <div>Photo - {props.message}</div>,
    Video: (props) => <div>Video - {props.message}</div>

};

export default ({as: As = Components.Photo, message}) => <As message={message}/>