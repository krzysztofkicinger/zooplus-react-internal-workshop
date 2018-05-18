import React from 'react';
import _ from 'lodash';

export const FunctionChild = ({numOfTimes, ...props}) => {
    const functionComponent = props.children;
    return <React.Fragment>
        {_.range(numOfTimes).map(item => functionComponent(item))}
    </React.Fragment>
};

export const IgnoredChild = props =>
    props.children && <div>Shall I be here ;)</div>;

export default (props) =>
    <div>
        Passed children: {props.children}
    </div>